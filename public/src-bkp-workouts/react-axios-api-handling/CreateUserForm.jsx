import { Fragment, useState } from "react";
import { handleChange, handleSubmit } from "./actions/createuseraxios_action";
import userFormFields from "./actions/userFormFields.json";

export function CreateUserForm() {
  const [formData, setFormData] = useState();
  const [status, setStatus] = useState();

  return (
    <div>
      <div className="container">
        <form onSubmit={(event) => handleSubmit(event, formData, setStatus)}>
          <div className="well"> {status && status} </div>

          {userFormFields &&
            userFormFields.length != 0 &&
            userFormFields.map((value, index) => {
              const {
                fieldLabel,
                fieldType,
                fieldName,
                fieldLabelClassName,
                fieldInputClassName,
                fieldID,
              } = value;

              return (
                <Fragment key={index}>
                  <div className="row">
                    <label htmlFor={fieldID} className={fieldLabelClassName}>
                      {fieldLabel}
                    </label>
                    <input
                      type={fieldType}
                      id={fieldID}
                      className={fieldInputClassName}
                      name={fieldName}
                      onChange={(event) =>
                        handleChange(event, setFormData, formData, setStatus)
                      }
                    />
                  </div>
                </Fragment>
              );
            })}
        </form>
      </div>
    </div>
  );
}
