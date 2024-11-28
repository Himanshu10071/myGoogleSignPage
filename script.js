console.log("himanshu");
<script>
  function handleCredentialResponse(response) {
    // Decode the ID token to get user info (if needed)
    console.log("Encoded JWT ID token: " + response.credential);
    
    // You can use the ID token to authenticate the user on your backend
    // or fetch user information from Google's APIs.
  }
</script>
