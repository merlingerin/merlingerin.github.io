$(document).ready(function () {

    $('.owl-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: false
    });
    
    $('.carousel_1').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
    });

    //VALIDATION FORM
    $('#contact-form').validate({
        rules: {
            Fname: {
                required: true,
                minlength: 2
            },
            Fsurname: {
                required: true,
                minlength: 2
            },
            Femail: {
                email: true,
                required: true
            }
        }
    });
    /////////////////

    //CHECKBOX FUNCTIONS//
    function checkbox(){
        $('.checkbox__wrapper li p label').click(function(ev){
            $(ev.target).parent().next().toggleClass('active');
        })
    };
    function checkbox_active(){
        $('.checkbox-trigger').click(function(ev){
            if($(ev.target).prev().children('input').prop('checked') ===  false) {
                ($(ev.target).prev().children('input').prop('checked', true));
                $(ev.target).addClass('active');
            }
            else {
                ($(ev.target).prev().children('input').prop('checked', false));
                $(ev.target).removeClass('active');
            }
        });
    };
    checkbox_active()
    checkbox();
    ///.CHECKBOX FUNCTIONS//

    // Scroll to Top Arrow
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#slid-up').fadeIn(200);    // Fade in the arrow
        } else {
            $('#slid-up').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#slid-up').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });
    // END Scroll to top Arrow

    //***********MOBILE MENU*****
    function navmenu(){
        $('#nav-trigger').click(function(){
            var that = this;
            
            $(that).next().stop().addClass('active').slideToggle();
        });
    };
    navmenu();
    loadMenu();
    function loadMenu(){
        if( $(window).width() > 1024 ) {
            $('.nav__list').removeClass('active');
        }
        else {
            $('.nav__list').hide().addClass('active');
        }
    }
    $(window).resize(function(){
        if( $(window).width() > 1024 ) {
            $('.nav__list').removeClass('active');
        }
        else {
            $('.nav__list').hide().addClass('active');
        }
    });

    //**********************/

    //SEND DATA AJAX
    function sendData(){

            $('.form__submit').click(function(e){
                e.preventDefault();

                var name = $("#Fname").val(),
                    surname = $('#Fsurname').val(),
                    email = $('#Femail').val(),
                    message = $('#Fmessage').val();
                    checkboxSend = '',
                    checkboxAgree = '';
                
                if($('#checkbox-send').is(':checked')) {
                    checkboxSend = $('#checkbox-send').val();
                };
                if($('#checkbox-agree').is(':checked')) {
                    checkboxAgree = $('#checkbox-agree').val();
                };
                var formData = [];
                formData.push(name);
                formData.push(surname);
                formData.push(email);
                formData.push(message);
                formData.push(checkboxSend);
                formData.push(checkboxAgree);


                $.ajax(
                {
                    url : "server.php",
                    type: "POST",
                    data : formData,
                    success: function(data, textStatus, jqXHR)
                {
                    console.log('success: ' + data);
                },
                    error: function(jqXHR, textStatus, errorThrown)
                {
                    console.log('Server ' + errorThrown);
                }
                });
            });
    };
    sendData();
    ///////////////////////////////////////////////////////////


});





new Vue({
    el: '#page-wrapper',
    data: {
        postData: {
            currentSize: 1,
            currentImg: '',
            currentName: '',
            currentPrice: 0,
        },
        cart: {
            totalPrice: 0,
            totalItems: 0
        },
        clothes: [
            {
                img: './images/girls/item1.jpg',
                name: 'Платье DIESEL',
                oldPrice: '6 000',
                newPrice: '5 520',
                sizes: ['1', '2', '3', '4'],
                currentSize: 0
            },{
                img: './images/girls/item2.jpg',
                name: 'Платье DIESEL',
                oldPrice: '',
                newPrice: '5 520',
                sizes: ['1', '2', '3', '4'],
                currentSize: 0
            },{
                img: './images/girls/item3.jpg',
                name: 'Платье DIESEL',
                oldPrice: '',
                newPrice: '5 520',
                sizes: ['1', '2', '3', '4'],
                currentSize: 0
            },{
                img: './images/girls/item4.jpg',
                name: 'Платье DIESEL',
                oldPrice: '',
                newPrice: '5 520',
                sizes: ['1', '2', '3', '4'],
                currentSize: 0
            },{
                img: './images/girls/item5.jpg',
                name: 'Платье DIESEL',
                oldPrice: '',
                newPrice: '5 520',
                sizes: ['1', '2', '3', '4'],
                currentSize: 0
            },{
                img: './images/girls/item6.jpg',
                name: 'Платье DIESEL',
                oldPrice: '',
                newPrice: '5 520',
                sizes: ['1', '2', '3', '4'],
                currentSize: 0
            },{
                img: './images/girls/item7.jpg',
                name: 'Платье DIESEL',
                oldPrice: '',
                newPrice: '5 520',
                sizes: ['1', '2', '3', '4'],
                currentSize: 0
            },{
                img: './images/girls/item8.jpg',
                name: 'Платье DIESEL',
                oldPrice: '',
                newPrice: '5 520',
                sizes: ['1', '2', '3', '4'],
                currentSize: 0
            },{
                img: './images/girls/item9.jpg',
                name: 'Платье DIESEL',
                oldPrice: '',
                newPrice: '5 520',
                sizes: ['1', '2', '3', '4'],
                currentSize: 0
            },{
                img: './images/girls/item10.jpg',
                name: 'Платье DIESEL',
                oldPrice: '',
                newPrice: '5 520',
                sizes: ['1', '2', '3', '4'],
                currentSize: 0
            },{
                img: './images/girls/item11.jpg',
                name: 'Платье DIESEL',
                oldPrice: '',
                newPrice: '5 520',
                sizes: ['1', '2', '3', '4'],
                currentSize: 0
            },{
                img: './images/girls/item12.jpg',
                name: 'Платье DIESEL',
                oldPrice: '',
                newPrice: '5 520',
                sizes: ['1', '2', '3', '4'],
                currentSize: 0
            },
        ],
        brands: [{
                path: './images/brands/brand1.png',
                name: 'bakery'
            },{
                path: './images/brands/brand2.png',
                name: 'cavalier'
            },{
                path: './images/brands/brand3.png',
                name: 'harvest co'
            },{
                path: './images/brands/brand4.png',
                name: 'landlock'
            },{
                path: './images/brands/brand5.png',
                name: 'spectrum'
            },{
                path: './images/brands/brand6.png',
                name: 'home energy'
            },
        ],
        posts: [
            {
                img: './images/posts/post1.jpg',
                writer: 'Stone Clad',
                date: '27.01.2017',
                title: 'WE ADDED MANY THINGS YOU MAY LIKE',
                text: 'It is a long established fact that a reader will be distracted.'
            },{
                img: './images/posts/post2.jpg',
                writer: 'Stone Clad',
                date: '27.01.2017',
                title: 'WE ADDED MANY THINGS YOU MAY LIKE',
                text: 'It is a long established fact that a reader will be distracted.'
            },{
                img: './images/posts/post3.jpg',
                writer: 'Stone Clad',
                date: '27.01.2017',
                title: 'WE ADDED MANY THINGS YOU MAY LIKE',
                text: 'It is a long established fact that a reader will be distracted.'
            },
        ]
    },
    methods: {
        pickedSize: function(index){
            this._data.postData.currentSize = index + 1;
        },
        pickedItem: function(index){
            this._data.postData.currentImg = this._data.clothes[index].img;
            this._data.postData.currentName = this._data.clothes[index].name;
            this._data.postData.currentPrice = parseInt(this._data.clothes[index].newPrice.split(' ').join(''));
        },
        addToCard: function(){
            let price = this._data.postData.currentPrice;
            this._data.cart.totalPrice += price;
            this._data.cart.totalItems += 1;
        }
    }
});
