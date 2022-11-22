"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFacebookImplementation = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const withGoogleAdsMediationFacebookAppGradlePlugin = config => {
    return config_plugins_1.withAppBuildGradle(config, ({ modResults, ...config }) => {
        if (modResults.language !== 'groovy') {
            config_plugins_1.WarningAggregator.addWarningAndroid('withGoogleMobileAdsMediationFacebook', `Cannot automatically configure app build.gradle if it's not groovy`);
            return { modResults, ...config };
        }
        modResults.contents = addFacebookImplementation(modResults.contents);
        return { modResults, ...config };
    });
};
const addFacebookImplementation = (projectBuildGradle) => {
    if (projectBuildGradle.includes('com.google.ads.mediation:facebook'))
        return projectBuildGradle;
    return projectBuildGradle.replace(/dependencies\s?{/, `dependencies {
        implementation 'com.google.ads.mediation:facebook:6.8.0.0'
    `);
};
exports.addFacebookImplementation = addFacebookImplementation;
exports.default = withGoogleAdsMediationFacebookAppGradlePlugin;
