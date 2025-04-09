import { theme } from "../Helpers/Theme/Theme";

export default function ThemeSwicher() {
  return (
    <div className="theme-swicher">
      <h1>Change Theme</h1>
      {/* <ul>
        {theme.list.map((theme, i) => (
          <li key={i} onClick={theme.chose}>
            {theme.name}
          </li>
        ))}
      </ul> */}
      <div>
        {theme.list.map((theme, i) => (
          <button
            key={i}
            onClick={theme.chose}
            className={`bg-${theme.name} ${theme.isActif ? "actif" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
