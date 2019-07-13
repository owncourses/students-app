import * as React from "react";
import i18n from "i18next";
import { Link, Redirect } from "react-router-dom";
import { userLoginInterface } from "./constants";
import Fields from "../../components/Fields";
import "./style.scss";
import { AuthFieldsInterface, UserInterface } from "./interfaces";
import { getValueFromFields, updateFields } from "../../utils/fields-logic";
import { Typography } from "@material-ui/core";

interface AuthProps {
  onLogin: (payload: userLoginInterface) => void;
  loading: boolean;
  error: string | boolean;
  currentUser: UserInterface | boolean;
}

interface AuthState {
  fields: AuthFieldsInterface;
}

class Auth extends React.Component<AuthProps, AuthState> {
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
        },
        {
          type: "password",
          label: i18n.t("Password"),
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
    const payload = {
      username: getValueFromFields(fields, "login"),
      password: getValueFromFields(fields, "password")
    };

    this.props.onLogin(payload);
  };

  handleUserInput = (fieldName: string, value: string) => {
    const updatedFields = updateFields(fieldName, value, this.state.fields);

    this.setState({ fields: updatedFields });
  };

  render() {
    const { fields } = this.state;
    const { loading, error, currentUser } = this.props;

    if (currentUser) {
      return <Redirect to={"/"} />;
    }

    return (
      <div className={"container"}>
        <Fields
          label={i18n.t("Sign in to your account!")}
          buttonLabel={i18n.t("Sign in")}
          fields={fields}
          isLoading={loading}
          error={error}
          onUserInput={this.handleUserInput}
          onSubmit={this.handleSubmit}
        />
        <Typography variant={"caption"}>
          <Link to={"/reset_request"}>{i18n.t("I forgot a password")}</Link>
        </Typography>
      </div>
    );
  }
}

export default Auth;
