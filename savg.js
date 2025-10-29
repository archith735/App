


        document.getElementById('form').addEventListener('submit', function (e) {
            e.preventDefault(); // Stop form from submitting normally

            // Call the validation function
            if (archit()) {
                // If valid, save to localStorage
                const name = document.getElementById('name').value.trim();
                const password = document.getElementById('password').value.trim();

                const userData = {
                    name: name,
                    password: password
                };

                localStorage.setItem('archith', JSON.stringify(userData));
                alert('Data saved to local storage');
            }
        });

        function archit() {
            var name = document.getElementById("name").value.trim();
            var password = document.getElementById("password").value.trim();
            var error = document.getElementById("error");

            if (name === "") {
                error.textContent = "ENTER YOUR NAME";
                return false;
            } else if (password.length < 6) {
                error.textContent = "AT LEAST 6 CHARACTER ENTER";
                return false;
            } else {
                error.textContent = "";
                alert(" SUCCESS");
                return true;
            }
        }

        // Show previously saved data in console
        const storageData = localStorage.getItem('archith');
        if (storageData) {
            const user = JSON.parse(storageData);
            console.log('Name:', user.name);
            console.log('Password:', user.password);
        }
    
