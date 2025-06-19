import { useState } from "react";
import "./Account.css";

function Authentification() {
  //State
  const [activeTab, setActiveTab] = useState("register");

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="tabs">
          <div
            className={activeTab === "register" ? "active" : ""}
            onClick={() => setActiveTab("register")}
          >
            CREATE ACCOUNT
          </div>
          <div
            className={activeTab === "login" ? "active" : ""}
            onClick={() => setActiveTab("login")}
          >
            CONNEXION
          </div>
        </div>
        {activeTab === "register" ? (
          <div className="register">
            <form action="" className="form-wrap">
              <div className="form-head">
                <h2>REGISTER</h2>
              </div>
              <div className="form-body">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder=""
                    className="first-name"
                    required
                  />
                  <label>First name *</label>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder=""
                    className="last-name"
                    required
                  />
                  <label>Last name *</label>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    placeholder=""
                    className="email"
                    required
                  />
                  <label>E-mail *</label>
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    placeholder=""
                    className="password"
                    required
                  />
                  <label>Password *</label>
                </div>
              </div>
              <div className="form-footer">
                <button type="submit">CREATE ACCOUNT</button>
              </div>
            </form>
            <div className="supp">
              <label>
                <h5>
                  Have already an account ?<a>Login</a>
                </h5>
              </label>
            </div>
            <label>
              En créant votre compte vous acceptez notre{" "}
              <a>politique de confidentialité</a>
            </label>
          </div>
        ) : (
          <form className="form-wrap">
            <div className="form-head">
              <h2>CONNECTION</h2>
            </div>

            <div className="form-body">
              <div className="form-group">
                <input type="email" placeholder="" className="email" required />
                <label>E-mail *</label>
              </div>

              <div className="form-group">
                <input
                  type="password"
                  placeholder=""
                  className="password"
                  required
                />
                <label>MOT DE PASSE *</label>
              </div>
            </div>

            <div>
              <label className="remember">
                <input type="checkbox" /> Remember me
                <span>
                  <a> Forgot Password?</a>
                </span>
              </label>
            </div>
            <div className="form-footer">
              <button type="submit" className="submit-btn">
                LOGIN
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Authentification;
