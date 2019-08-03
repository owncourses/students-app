import * as React from "react";
import i18n from "i18next";
import Fields from "../../components/Fields";
import "./style.scss";
import { AuthFieldsInterface } from "../Auth/interfaces";
import { getValueFromFields, updateFields } from "../../utils/fields-logic";
import { Redirect } from "react-router";

interface ResetPasswordState {
  fields: AuthFieldsInterface;
}

interface ResetPasswordProps {
  success: boolean;
  error: boolean | string;
  loading: boolean;
  onSubmit: (payload: {
    password: string;
    repeatedPassword: string;
    urlToken: string;
  }) => void;
}

class ResetPassword extends React.Component<
  ResetPasswordProps,
  ResetPasswordState
> {
  urlToken: string = "";
  constructor(props) {
    super(props);

    this.state = {
      fields: [
        {
          type: "password",
          label: i18n.t("Password"),
          value: "",
          disabled: false,
          error: null
        },
        {
          type: "confirmPassword",
          label: i18n.t("Confirm password"),
          value: "",
          disabled: false,
          error: null
        }
      ]
    };
  }

  componentDidMount(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get("token");
    if (urlToken) {
      this.urlToken = urlToken;
    }
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fields } = this.state;
    const payload = {
      password: getValueFromFields(fields, "password"),
      repeatedPassword: getValueFromFields(fields, "confirmPassword")
    };

    this.props.onSubmit({ ...payload, urlToken: this.urlToken });
  };

  handleUserInput = (fieldName: string, value: string) => {
    const updatedFields = updateFields(fieldName, value, this.state.fields);

    this.setState({ fields: updatedFields });
  };

  render() {
    const { fields } = this.state;
    const { error, loading, success } = this.props;

    if (success) {
      return <Redirect to={"/login"} />;
    }

    return (
      <div className={"container"}>
        <Fields
          fields={fields}
          label={i18n.t("Reset your password")}
          buttonLabel={i18n.t("Reset your password")}
          isLoading={loading}
          error={error}
          onUserInput={this.handleUserInput}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default ResetPassword;
