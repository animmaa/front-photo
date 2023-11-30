import './logout.scss';

export default function logout() {
  return (
    <div className="logout">
      <form>
        <label htmlFor="email">
          Email
          <input type="text" />
        </label>
        <label htmlFor="password">
          Mot de passe
          <input type="text" />
        </label>
        <label htmlFor="lastname">
          Nom
          <input type="text" />
        </label>
        <label htmlFor="firstname">
          Prénom
          <input type="text" />
        </label>
        <label htmlFor="phone">
          Téléphone
          <input type="text" />
        </label>
        <label htmlFor="address">
          Adresse
          <input type="text" />
        </label>
        <label htmlFor="postalcode">
          Code postal
          <input type="text" />
        </label>
        <label htmlFor="city">
          Ville
          <input type="text" />
        </label>
        <label htmlFor="country">
          Pays
          <input type="text" />
        </label>
      </form>
    </div>
  );
}
