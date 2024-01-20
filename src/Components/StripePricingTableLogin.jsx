import * as React from 'react';

const StripePricingTableLogin = () => {

    // Paste the stripe-pricing-table snippet in your React component
    try {
        return (
            <stripe-pricing-table
                pricing-table-id="prctbl_1OV5SUCI8KCBgRqhMScdMrkL"
                publishable-key="pk_test_51OV2cBCI8KCBgRqheXJ2mAI7IawlDpTNdjEsA5W15aTtn0F3rkYYtEGu8ZfWVvR1UpehTinGlbaFCz3zEGWgcfU6000rWZylyv"
            >
            </stripe-pricing-table>
        );
    } catch (e) {
        console.error(e);
    }
}

export default StripePricingTableLogin;