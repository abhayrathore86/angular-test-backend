/**
 * Main application routes
 */

import errors from './components/errors';
import path from 'path';

export default function (app) {
    // Insert routes below
    app.use('/api/things', require('./api/routes/thing.routes'));
    app.use('/api/users', require('./api/routes/user.routes'));

    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(errors[404]);

    // All other routes should redirect to the app.html
    app.route('/*')
        .get((req, res) => {
            res.sendFile(path.resolve(`${app.get('appPath')}/app.html`));
        });
}
