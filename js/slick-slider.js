export default function setSlickSlider() {
    $(document).ready(function(){
        $('.features__carousel').slick({
            dots: false,
            arrows: false,
            variableWidth: true
        });
      });
}