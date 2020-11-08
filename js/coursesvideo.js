    // video on click
    $(".list-group-item").click(function () {
        var index = $(".list-group-item").index(this);
        // alert( $(".list-group-item").index(this) );
        // alert(index);
        $('#hiddenInputName').val(index);
        $('.list-group-item').removeClass('selected');
        $('.list-group-item').removeClass('active');
        $(this).addClass('selected');
        var videosource =document.getElementById('myvideo').src ;
     
        var xhr = new XMLHttpRequest();
        // calling ajax
    //    alert(videosource);
        xhr.open("GET", videosource);
        // instead of fetching image we return binary data what's going to do , store in object called arraybuffer then with that we can create blob object
        xhr.responseType = "arraybuffer";
    
        xhr.onload = function (e) {
            var blob = new Blob([xhr.response], {type: 'video/mp4'});
            var url = URL.createObjectURL(blob);
    
            console.log(url);
    
            var img = document.getElementById("myvideo");
            img.src = url;
        }
        // send ajax request
        xhr.send(); 
        // alert (videosource);
        // mob
        var videosource =document.getElementById('myvideomob').src ;
     
        var xhrmob = new XMLHttpRequest();
        // calling ajax
    //    alert(videosource);
        xhrmob.open("GET", videosource);
        // instead of fetching image we return binary data what's going to do , store in object called arraybuffer then with that we can create blob object
        xhrmob.responseType = "arraybuffer";
    
        xhrmob.onload = function (e) {
            var blob = new Blob([xhrmob.response], {type: 'video/mp4'});
            var url = URL.createObjectURL(blob);
    
            console.log(url);
    
            var img = document.getElementById("myvideomob");
            img.src = url;
        }
        // send ajax request
        xhrmob.send(); 
        // alert (videosource);
        

        images = ["course/1. Introduction To HTML 5 Section.mp4",
            "course/6. Creating A Full Webpage.mp4",
            "course/Desktopfinal list.pdf",
            "course/6. Creating A Full Webpage.mp4", "course/8. Header Tags.mp4", "course/events.html", "course/10. Paragraph Tags.mp4", "course/4. The Structure Of A Webpage.mp4", "course/Desktopfinal list.pdf"];



        });
        // next and prev click video
        var i = $('#hiddenInputName').val();
        // alert(i);
        var j = -2;
        var c = 0;
        function mySlide(param) {
            var i = $('#hiddenInputName').val();
            // alert(i);
            if (j != i) {
                if (param === 'next') {
                    i++;
                    //   alert(i);
                    if (i === images.length) { i = images.length - 1; }
                } else {
                    i--;
                    if (i < 0) { i = 0; }
                }
                document.getElementById('myvideo').src = images[i];
                $('.list-group-item').removeClass('selected');
                $('.list-group-item').removeClass('active');
                element = document.getElementsByClassName('list-group-item');
                element[i].classList.add('selected');
                //   alert(i);
                c = i;
                j = $('#hiddenInputName').val();;
                //   alert(j);

            } else {
                if (param === 'next') {

                    c++;
                    //   alert(c);
                    if (c === images.length) { c = images.length - 1; }
                } else {
                    c--;
                    if (c < 0) { c = 0; }
                }
                document.getElementById('myvideo').src = images[c];
                $('.list-group-item').removeClass('selected');
                $('.list-group-item').removeClass('active');
                element = document.getElementsByClassName('list-group-item');
                element[c].classList.add('selected');
                //               element = document.getElementsByClassName('list-group-item');
                //   element[c].classList.add('selected');
                //   alert(c);
            }
        }
        // full screen video
        var elem = document.getElementById("myvideo");
        function openFullscreen() {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
        }
        // readmore function
        function myFunction() {
            var dots = document.getElementById("dots");
            var moreText = document.getElementById("more");
            var btnText = document.getElementById("myBtn");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read less";
                moreText.style.display = "inline";
            }
        }
        // read more mob function
        function myFunctionmob() {
            var dots = document.getElementById("dotsmob");
            var moreText = document.getElementById("moremob");
            var btnText = document.getElementById("myBtnmob");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read less";
                moreText.style.display = "inline";
            }
        }

        // mobilejava

        $(".list-group-itemmob").click(function () {
            $('.list-group-itemmob').removeClass('selectedmob');
            $('.list-group-itemmob').removeClass('activemob');
            $(this).addClass('selectedmob');
          
            
        });
        $("#overview").css('display', 'none');
        $("#overviewhead").on("click", function () {
            if ($("#overview").css('display') == 'none') {
                $("#overview").css('display', 'block');
                $("#coursecontentmob").css('display', 'none');
            } else {
                $("#coursecontentmob").css('display', 'none');
            }
        });
        $("#coursecontenthead").on("click", function () {
            if ($("#coursecontentmob").css('display') == 'none') {
                $("#coursecontentmob").css('display', 'block');
                $("#overview").css('display', 'none');
            } else {
                $("#overview").css('display', 'none');
            }
        });
        // header and footer
        $("#header-desktop").load('templates/header_finwin.php');
        $("#footer-desktop").load('templates/footer_finwin.html');
        $("#footer-mobile").load('templates/footer_mobile.html');
        $("#header-mobile").load('templates/header_mobile_finwin.php'); 
        //get parameters from url
        var getParams = function (url) {
            var params = {};
            var parser = document.createElement('a');
            parser.href = url;
            var query = parser.search.substring(1);
            var vars = query.split('&');
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                params[pair[0]] = decodeURIComponent(pair[1]);
            }
            return params;
        };

        // Get parameters from the current URL
        var params = getParams(window.location.href);
        // console.log(params);
        var courseVideo = params.courseVideo;


           var result = {};

            
      
        if (window.innerWidth >= 960) {
            if(params.courseVideo == 1 || params.courseVideo == 2 || params.courseVideo == 3 )  {

                $.ajax({
                    type: 'POST',
                    url:'php/coursevideocontent.php',
                    'async': false,
                    dataType: "json",
                    data: {
                        get_data: 'selectedProduct',
                        "courseVideo": courseVideo
                    },
                success: function (data) {
                    if (data.status == '201') {
                        result = data.result;
                        // console.log(result); 
                        $("#aboutcoursecontent").html(result.aboutcoursecontent);
                        $("#skilllevel").html(result.skilllevel);
                        $("#students").html(result.students);
                        $("#myvideo").attr("src",result.myvideo);
                        $("#description").html(result.description);
                        $("#dots").html(result.dots);
                        $("#more").html(result.more);
                        $("#languages").html(result.languages);
                        $("#lectures").html(result.lectures);
                        $("#videoshours").html(result.videoshours);
                        $("#certificates").html(result.certificates);
                    
                    } else {
                        console.log("not okay");
                    }
                }
                });
                             
                        
                        }
        }else{
            if(params.courseVideo == 1 || params.courseVideo == 2 || params.courseVideo == 3 )  {

                $.ajax({
                    type: 'POST',
                    url:'php/coursevideocontent.php',
                    'async': false,
                    dataType: "json",
                    data: {
                        get_data: 'selectedProduct',
                        "courseVideo": courseVideo
                    },
                success: function (data) {
                    if (data.status == '201') {
                        result = data.result;
                        // console.log(result); 
                        $("#aboutcoursecontentmob").html(result.aboutcoursecontent);
                        $("#skilllevelmob").html(result.skilllevel);
                        $("#studentsmob").html(result.students);
                        $("#myvideomob").attr("src",result.myvideo);
                        $("#descriptionmob").html(result.description);
                        $("#dotsmob").html(result.dots);
                        $("#moremob").html(result.more);
                        $("#languagesmob").html(result.languages);
                        $("#lecturesmob").html(result.lectures);
                        $("#videoshoursmob").html(result.videoshours);
                        $("#certificatesmob").html(result.certificates);
                    } else {
                        console.log("not okay");
                    }
                }
                });
                             
                        
                        }
        }
