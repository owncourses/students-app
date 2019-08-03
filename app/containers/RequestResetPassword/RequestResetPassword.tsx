import * as React from "react";
import Fields from "../../components/Fields";
import i18n from "i18next";
import { AuthFieldsInterface } from "../Auth/interfaces";
import "./style.scss";
import { getValueFromFields, updateFields } from "../../utils/fields-logic";

interface RequestResetPasswordState {
  fields: AuthFieldsInterface;
}

interface RequestResetPasswordProps {
  success: boolean;
  error: boolean | string;
  loading: boolean;
  email: string | null;
  onSubmit: (payload: string) => void;
}

class RequestResetPassword extends React.Component<
  RequestResetPasswordProps,
  RequestResetPasswordState
> {
  constructor(props) {
    super(props);
    this.state = {
      fields: [
        {
          type: "login",
          label: i18n.t("Login"),
          value: "",
          disabled: false,
          error: null
        }
      ]
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fields } = this.state;
    this.props.onSubmit(getValueFromFields(fields, "login"));
  };

  handleUserInput = (fieldName: string, value: string) => {
    const updatedFields = updateFields(fieldName, value, this.state.fields);

    this.setState({ fields: updatedFields });
  };

  render() {
    const { fields } = this.state;
    const { error, loading, success, email } = this.props;

    if (success) {
      return (
        <div className={"container"}>
          <div className={"success"}>
            {i18n.t("An e-mail has been sent to", { value: email })}
          </div>
        </div>
      );
    }

    return (
      <div className={"container"}>
        <Fields
          subtitle={i18n.t("Provide your email")}
          label={i18n.t("You forgot a password")}
          buttonLabel={i18n.t("Submit")}
          fields={fields}
          isLoading={loading}
          error={error}
          onUserInput={this.handleUserInput}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default RequestResetPassword;
