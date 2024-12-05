import logo from './logo.svg';
import './App.css';


// LANGUAGE WORKING:
import { LANGUAGES } from './constants/constant';
import { useTranslation } from 'react-i18next';
function App() {
  const {i18n,t}=useTranslation();
  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <>
        <div className="App header">
    <h1>App.js</h1>
    <h2>{t('title')}</h2>
    <h2>Hy How are You?</h2>

    </div>

    <select defaultValue={'en'}  onChange={onChangeLang}>
      {LANGUAGES.map(({code,label})=>(
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
    </>




  );
}

export default App;
