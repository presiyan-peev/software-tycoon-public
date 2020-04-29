<template>
    <div class="login">
        <section id="firebaseui-auth-container"></section>
    </div>        
</template>

<script>
import * as firebase from "firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
   mounted() {
        let ui = firebaseui.auth.AuthUI.getInstance();
        if (!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }
        var uiConfig = {
            signInSuccessUrl: "/select-game",
            signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID,]
        };
        ui.start("#firebaseui-auth-container", uiConfig);
    }
}
</script>