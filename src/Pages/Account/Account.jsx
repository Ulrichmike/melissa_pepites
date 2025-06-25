import { useState } from "react";
import "./Account.css";
import { useAuthContext } from "../../Contexts/AuthContext";

function Authentification() {
  //State
  const [activeTab, setActiveTab] = useState("register");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  //Recuperation des méthodes d'authentification
  const { login, register, isAuthenticated, hasAccount, isGuest } =
    useAuthContext();

  // Gestion des changements des inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Soumission du formulaire Register
  const handleRegister = (e) => {
    e.preventDefault();
    register(formData.email); // Enregistre l'email (simplifié pour l'exemple)
    // Ici, vous pourriez ajouter un appel API pour créer le compte
    alert("Compte créé avec succès !");
  };

  // Soumission du formulaire Login
  const handleLogin = (e) => {
    e.preventDefault();
    // Simule un token après connexion (remplacez par un vrai appel API)
    const fakeToken = "fake-jwt-token";
    login(fakeToken, formData.email);
    alert("Connecté avec succès !");
  };

  // Si l'utilisateur est déjà connecté, afficher un message
  if (isAuthenticated) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h2>Vous êtes déjà connecté !</h2>
          <button onClick={() => logout()}>Déconnexion</button>
        </div>
      </div>
    );
  }

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
            <form onSubmit={handleRegister} className="form-wrap">
              <div className="form-head">
                <h2>REGISTER</h2>
              </div>
              <div className="form-body">
                <div className="form-group">
                  <input
                    type="text"
                    name="first-name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="first-name"
                    required
                  />
                  <label>First name *</label>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="last-name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="last-name"
                    required
                  />
                  <label>Last name *</label>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="email"
                    required
                  />
                  <label>E-mail *</label>
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
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
          <form onSubmit={handleLogin} className="form-wrap">
            <div className="form-head">
              <h2>CONNECTION</h2>
            </div>

            <div className="form-body">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="email"
                  required
                />
                <label>E-mail *</label>
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
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
