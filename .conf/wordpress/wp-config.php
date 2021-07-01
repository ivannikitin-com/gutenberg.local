<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'gutenberg' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'my_P@sSw0rd' );

/** MySQL hostname */
define( 'DB_HOST', 'db' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
 define('AUTH_KEY',         'gS_Oo?ZLrk:XH{R>76+5}JVvAb3h%bYw|0bfgxtS*,cj+@=:ujW)7 Z~H;z+]^*w');
 define('SECURE_AUTH_KEY',  'JHE~*HLQIv[oj/cPL(>!l$+FNTB7lB>x|xR^&Z9n]sy~{PL&y{dY{+MH[.6,y+Gn');
 define('LOGGED_IN_KEY',    '!B%,rv%8p#wA[JO}K&j$F4*9-Wsp.E6*I%2Ri6?Oq4D9`vePx&l{ekYtojv*>zX0');
 define('NONCE_KEY',        '||f=sDPlQNXdJ5s4.a%WjADB|>2r+yI2!j7@-_S3MO]=nmf[:fT|ZdQyyC{`7>C7');
 define('AUTH_SALT',        '#<kr]BD,|%F.|>j%iCxJ6d25fMj:^9!&_Jv:G`j~ZiJgE#k|5}f|en#O=}Q9s0Z|');
 define('SECURE_AUTH_SALT', '&c]*B]ELsJ1Ofa`h@W`{=%Wyy$-qAV=4io5+4WI}b^=ya,{;`jvkHL<P:N|`)yD]');
 define('LOGGED_IN_SALT',   'VO>utsjpbGiUq+F-&-}349fq{2Pxu,#8YhksaRwt{aJ^#k]n`]e.$K$eH<c6-:%~');
 define('NONCE_SALT',       'R|2% 7c<:3-7O!W17=}5G.ryY#-BoO @F9fP/U]EYqOl:0y&XImv0}?5vWQ-#RXA');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
 define('WP_DEBUG', true);
 define('SAVEQUERIES',	WP_DEBUG);
 define('WP_DEBUG_LOG', WP_DEBUG);
 define('SCRIPT_DEBUG', WP_DEBUG);
 
 define('WP_DEBUG_DISPLAY', WP_DEBUG);
 
 // Панели плагина Query Monitor https://wordpress.org/plugins/query-monitor/
 define( 'QM_DISABLED', ! WP_DEBUG );
 define( 'QM_ENABLE_CAPS_PANEL', WP_DEBUG );
 
 // Настройки Query Monitor
 define( 'QM_DB_EXPENSIVE', 0.3);	// Время когда SQL запрос считается медленным

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
