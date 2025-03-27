
    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    $(document).ready(function () {
        // Testimonials carousel
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            items: 2,
            dots: false,
            loop: true,
            nav: true,
            margin: 20,
navText: [
    '<div style="display: flex; align-items: center; gap: 10px;">' +
        '<i class="ri-arrow-left-circle-fill" style="font-size: 2rem; color:#fff"></i>' +
        '<i class="ri-arrow-right-circle-fill" style="font-size: 2rem; color:#fff"></i>' +
    '</div>'
],
            responsive: {
                0: {
                    items: 1 // Show 1 item on small screens
                },
                768: {
                    items: 2 // Show 2 items on medium screens
                }
            }
        });
    });

    $(document).ready(function() {
        var counters = $(".count");
        var countersQuantity = counters.length;
        var counter = [];
        var suffixes = []; // Array to store suffixes like '+', 'k+', etc.
    
        // Extract numeric values and suffixes
        for (i = 0; i < countersQuantity; i++) {
            var text = counters[i].innerHTML;
            var numericValue = parseFloat(text); // Extract numeric part
            var suffix = text.replace(numericValue, ''); // Extract suffix (e.g., '+', 'k+')
            counter[i] = numericValue;
            suffixes[i] = suffix;
        }
    
        // Function to animate the counter
        var count = function(start, value, id, suffix) {
            var localStart = start;
            var intervalSpeed = 40; // Default speed for most counters
    
            // Increase speed for the "Happy Clients" counter (2000+)
            if (value === 2000) {
                intervalSpeed = 25; // Faster speed (adjust as needed)
            }
    
            setInterval(function() {
                if (localStart < value) {
                    localStart++;
                    counters[id].innerHTML = localStart + suffix; // Append suffix
                }
            }, intervalSpeed);
        }
    
        // Start counting for each counter
        for (j = 0; j < countersQuantity; j++) {
            count(0, counter[j], j, suffixes[j]);
        }
    });

 