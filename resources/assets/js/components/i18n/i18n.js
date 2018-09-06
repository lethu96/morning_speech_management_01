import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector)
    .init({
    // we init with resources
        interpolation: {
            prefix: '__',
            suffix: '__',
            escapeValue: true,
            unescapePrefix: ':',
        },

        fallbackLng: 'en',
        debug: true,
        resources: {
            en: {
            translations: {
                'Hello': 'Reset Password.',
                'reset': 'Reset Password.',
                'btn_reset': 'Send Password Reset Link',
                'label-email': 'E-Mail Address',
                'password': 'Password',
                'confirm_password': 'Confirm Password',
                'login': 'Login',
                'wellcome': 'Wellcome to Morning Speech Management',
                'admin': 'Wecome Admin',
                'forgot': 'Forgot Your Password?',
                'remember': 'Remember Me',
                'email': 'Email',
                'signIn': 'Sign In',
                'user': 'Tạ Quang Hiếu',
                'online': 'Online',
                'menu': 'Menu',
                'menu-post': 'Post',
                'menu-user': 'User',
                'menu-rank': 'Ranking',
                'menu-random': 'Random User',
            }
        },
        
        },

        fallbackLng: 'en',

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ',',
        },

        react: {
            defaultTransParent: true,
            wait: true,
        }
    });

export default i18n;
