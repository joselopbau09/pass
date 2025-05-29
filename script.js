function generatePassword() {
  const phrase = document.getElementById("userPhrase").value.trim();
  if (!phrase) {
    alert("Por favor, escribe una frase.");
    return;
  }

  const words = phrase.split(" ");
  let password = words.map(word => word[0]).join("");

  // Reemplazos comunes
  password = password.replace(/a/gi, "@")
                     .replace(/s/gi, "$")
                     .replace(/i/gi, "1")
                     .replace(/o/gi, "0");

  // Alternar mayúsculas y minúsculas
  password = password.split("").map((char, i) =>
    i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
  ).join("");

  // Agregar número o símbolo al inicio o final
  password = "#" + password + "9";

  // Validar longitud mínima
  if (password.length < 12) {
    password += "!XyZ";
  }

  // Mostrar resultado
  document.getElementById("result").innerText = "Contraseña sugerida: " + password;
}

