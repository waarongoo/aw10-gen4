

        $(document).ready(function () {

            $(document).keypress(function (e) {

                if (e.which == 13) {
                    e.preventDefault();
                    // enter pressed
                    var product = $("#inputString").val();
                    window.location.href = "http://localhost/paperbind_new/searched-result.php?pro="+ product;
                }
            });
        });

    
