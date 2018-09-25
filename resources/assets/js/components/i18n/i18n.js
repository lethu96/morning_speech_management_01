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
                'following': 'Following',
                'following': 'Follow',
                'view-profile': 'View Profile',
                'home': 'Home',
                'post': 'Post',
                'new-post': 'New Post',
                'my-post': 'My Post',
                'people': 'People',
                'my-profile': 'My Profile',
                'logout': 'Logout',
                'follower': 'Followers',
                'message': 'Message',
                'image': 'Image',
                'comment': 'Comment',
                'vote-up': 'Vote up',
                'work-space': 'Work Space',
                'content': 'Content',
                'add-post': 'Add Post',
                'name': 'Name',
                'phone': 'Phone',
                'code': 'Code',
                'card_number': 'Card Number',
                'avatar': 'Avatar',
                'action': 'Action',
                'update-user': 'Update User',
                'return-list-user': 'Return List User',
                'male': 'Male',
                'female': 'Female',
                'option': '---Option---',
                'birth_day': 'Birth Day',
                'open-date': 'Open Date',
                'close-date': 'Close Date',
                'role': 'Role',
                'admin': 'Admin'
                'user': 'User',
                'position': 'Position',
                'workspaces': 'WorkSpace',
                'company': 'Comapany',
                'avatar': 'Avatar',
                'title-post': 'Title Post',
                'ranking': 'Ranking',
                'please-choose-workspaces': 'Please choose workspace',
                'list-post': 'List Posts',
                'title': 'Title',
                'content': 'Content',
                'create-user': 'Create User',
                'gender': 'Gender',
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
