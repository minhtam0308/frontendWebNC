$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 0) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });
    //Banner-------------------------------------------------------------------------------------------
    let currentIndex = 0;
    const totalSlides = 3;
    const autoDelay = 3000;     // chuyển slide mỗi 3s
    const pauseAfterClick = 20000; // 20 giây tạm dừng sau khi nhấn

    let autoSlideInterval;
    let autoResumeTimeout;

    function updateBanner() {
        const offset = -currentIndex * 100;
        $('#bannerTrack').css('transform', `translateX(${offset}%)`);
    }

    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateBanner();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(goToNextSlide, autoDelay);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function resetAutoSlidePause() {
        stopAutoSlide();
        clearTimeout(autoResumeTimeout);
        autoResumeTimeout = setTimeout(() => {
            startAutoSlide();
        }, pauseAfterClick);
    }

    // Sự kiện nút chuyển
    $('#nextBtn').click(function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateBanner();
        resetAutoSlidePause();
    });

    $('#prevBtn').click(function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateBanner();
        resetAutoSlidePause();
    });

    // Khởi động auto slide lúc đầu
    startAutoSlide();

    //banner fixeddd--------------------------------------------------------------------------------------------------------------------------

});

$(document).ready(function ($) {

    $(window).on('scroll', function () {

        //ADD .TIGHT
        if ($(window).scrollTop() + $(window).height() > $('.wrapper').outerHeight()) {
            $('body').addClass('tight');
            $('.arrow').hide();
        } else {
            $('body').removeClass('tight');
            $('.arrow').show();
        }
    });

    //BACK TO PRESENTATION MODE
    $("html").on("click", "body.tight .wrapper", function () {
        $('html, body').animate({
            scrollTop: $('.wrapper').outerHeight() - $(window).height()
        }, 500);
    });
    
});



$(() => {
    // Load header xong rồi mới xử lý active
    $("#header").load("/HomePage/header.html", function () {
        const url = window.location.href;
        console.log("URL hiện tại: ", url);

        if (url.includes("index.html") || url.endsWith("/HomePage/")) {
            $('.home-page').addClass('active');
            $('#header-home-page').hide();
        } else if (url.includes("catagory.html")) {
            $('.cata-gory').addClass('active');
        } else if (url.includes("contactt.html")) {
            $('.contact').addClass('active');
<<<<<<< Updated upstream
=======
        }else if (url.includes("blog.html")) {
            $('.blogg').addClass('active');
        }else if (url.includes("BecomeAuthor.html")) {
            $('.author').addClass('active');
        }else if (url.includes("NewFeature.html")) {
            $('.newbook').addClass('active');
>>>>>>> Stashed changes
        }

        
    });

    // Footer có thể load không cần xử lý gì thêm
    $("#footer").load("/HomePage/footer.html");
});

function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth' // cuộn mượt
    });
  }