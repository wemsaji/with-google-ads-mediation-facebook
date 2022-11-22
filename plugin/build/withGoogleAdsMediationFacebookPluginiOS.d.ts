import { ConfigPlugin } from '@expo/config-plugins';
import { MergeResults } from "@expo/config-plugins/build/utils/generateCode";
declare const withGoogleAdsMediationFacebookPluginiOS: ConfigPlugin;
declare const addGoogleMobileAdsMediationFacebookSupport: (src: string) => MergeResults;
export { addGoogleMobileAdsMediationFacebookSupport };
export default withGoogleAdsMediationFacebookPluginiOS;
