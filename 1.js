<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UET Tags and Events</title>
</head>
<body>


    <script>  //基本タグ１
        ...
        var o={ti:"13579"};
        ...
        (window, document, "script", "//bat.bing.com/bat.js", "uetq");
    </script>

    <script>　 //基本タグ２
        ...
        var o={ti:"24680"};
        ...
        (window, document, "script", "//bat.bing.com/bat.js", "uetq");
    </script>

    <script>　//イベントタグ１
     window.uetq = window.uetq || [];
     window.uetq.push('event', 'purchase', {"revenue_value":990,"currency":"JPY"});
    </script>

    <script>　//イベントタグ２
     window.uetq = window.uetq || [];
     window.uetq.push('event', 'purchase', {"revenue_value":990,"currency":"JPY"});
    </script>




    
    <script>  //基本タグ１
        ...
        var o={ti:"13579"};
        ...
        (window, document, "script", "//bat.bing.com/bat.js", "uetq");
    </script>

    <script>　 //基本タグ２
        ...
        var o={ti:"24680"};
        ...
        (window, document, "script", "//bat.bing.com/bat.js", "uetq_adtech");
    </script>

    <script>　//イベントタグ１
     window.uetq = window.uetq || [];
     window.uetq.push('event', 'purchase', {"revenue_value":990,"currency":"JPY"});
    </script>

    <script>　//イベントタグ２
     window.uetq_adtech = window.uetq_adtech || [];
     window.uetq_adtech.push('event', 'purchase', {"revenue_value":990,"currency":"JPY"});
    </script>


    <!-- Basic UET Tag with ID 67890 -->
    <script>
        (function(w, d, t, r, u) {
            var f, n, i;
            w[u] = w[u] || [];
            
            f = function() {
                var o = { ti: 67890, enableAutoSpaTracking: true };
                o.q = w[u];
                w[u] = new UET(o);
                w[u].push("pageLoad");
            };

            n = d.createElement(t);
            n.src = r;
            n.async = 1;
            n.onload = n.onreadystatechange = function() {
                var s = this.readyState;
                s && s !== "loaded" && s !== "complete" || (f(), n.onload = n.onreadystatechange = null);
            };
            
            i = d.getElementsByTagName(t)[0];
            i.parentNode.insertBefore(n, i);
        })(window, document, "script", "//bat.bing.com/bat.js", "uetq");
    </script>

    <!-- Custom Event for ID 12345 (e.g., purchase event) -->
    <script>
        window.uetq.push('event', '', {
            "revenue_value": 100.00,
            "currency": "JPY",
            "event_type": "purchase",
            "ti": 12345  // UET tag ID
        });
    </script>

    <!-- Custom Event for ID 67890 (e.g., signup event) -->
    <script>
        window.uetq.push('event', '', {
            "event_type": "signup",
            "user_type": "new",
            "ti": 67890  // UET tag ID
        });
    </script>

</body>
</html>
