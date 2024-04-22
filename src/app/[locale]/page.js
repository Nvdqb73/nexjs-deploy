import Home from '../Pages/Home';
import initTranslations from '../i18n';
import TranslationsProvider from '~/app/components/feature/TranslationsProvider';

const i18nNamespaces = ['home'];

async function App({ params: { locale } }) {
    const { resources } = await initTranslations(locale, i18nNamespaces);
    return (
        <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
            <Home />
        </TranslationsProvider>
    );
}

export default App;
