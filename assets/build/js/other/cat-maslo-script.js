$(document).ready(function () {
  $('#MASLO-INPUTS-FILTER').click(function () {
    var masloRadioVal = $('input[name="maslo_type"]:checked').val();
    $('.maslo_appointment-filter').hide(); // Назначение (Все, Автомобили, Грузовики, комбайны, трактора)
    $('.maslo_oil-type-filter').hide(); // Тип масла (Все, 2Т, 4Т, Моторное)
    $('.maslo_viscosity-filter').hide(); // Вязкость (0W-16)
    $('.maslo_manufacturer-filter').hide(); // Производитель (ENI)
    $('.maslo_composition-filter').hide(); // Состав (Синтетическое)
    $('.maslo_engine-type-filter').hide(); // Тип двигателя (Бензиновый)
    $('.maslo_specification-acea-filter').hide(); // Спецификация ACEA (А1/В1)
    $('.maslo_specification-api-filter').hide(); // Спецификация API (CB, CC)
    $('.maslo_specification-oem-filter').hide(); // Спецификация OEM (BMW Longlife-01 FE)
    $('.maslo_brand-filter').hide(); // Бренд (Castrol, AMSOIL)
    $('.maslo_specification-filter').hide(); // Спецификации (BMW LongLife-01 FE)
    $('.maslo_access-filter').hide(); // Допуски (Allison C-3, Allison C-4)
    $('.maslo_color-filter').hide(); // Цвет (Желтый, Зеленый)
    $('.maslo_specification-2-filter').hide(); // Спецификация (DOT 3, DOT 4)
    $('.maslo_brand-2-filter').hide(); // Бренд (Ниагара, Полярник)
    $('.maslo_class-filter').hide(); // Класс (ОЖ-К (концентрат), ОЖ-40)

    switch (masloRadioVal) {
      case 'maslo_grease':
        $('.maslo_appointment-filter').show(); // Назначение (Все, Автомобили, Грузовики, комбайны, трактора)
        $('.maslo_oil-type-filter').show(); // Тип масла (Все, 2Т, 4Т, Моторное)
        $('.maslo_viscosity-filter').show(); // Вязкость (0W-16)
        $('.maslo_manufacturer-filter').show(); // Производитель (ENI)
        $('.maslo_composition-filter').show(); // Состав (Синтетическое)
        $('.maslo_engine-type-filter').show(); // Тип двигателя (Бензиновый)
        $('.maslo_specification-acea-filter').show(); // Спецификация ACEA (А1/В1)
        $('.maslo_specification-api-filter').show(); // Спецификация API (CB, CC)
        $('.maslo_specification-oem-filter').show(); // Спецификация OEM (BMW Longlife-01 FE)
        break;
      case 'fluid':
        $('.maslo_brand-filter').show(); // Бренд (Castrol, AMSOIL)
        $('.maslo_specification-filter').show(); // Спецификации (BMW LongLife-01 FE)
        $('.maslo_access-filter').show(); // Допуски (Allison C-3, Allison C-4)
        break;
      case 'antifreeze':
        $('.maslo_brand-filter').show(); // Бренд (Castrol, AMSOIL)
        $('.maslo_specification-filter').show(); // Спецификации (BMW LongLife-01 FE)
        $('.maslo_access-filter').show(); // Допуски (Allison C-3, Allison C-4)
        $('.maslo_color-filter').show(); // Цвет (Желтый, Зеленый)
        break;
      case 'tosol':
        $('.maslo_brand-2-filter').show(); // Бренд (Ниагара, Полярник)
        $('.maslo_class-filter').show(); // Класс (ОЖ-К (концентрат), ОЖ-40)
        break;
      case 'brake_fluid':
        $('.maslo_brand-2-filter').show(); // Бренд (Ниагара, Полярник)
        $('.maslo_specification-2-filter').show(); // спецификация (DOT 3, DOT 4)
        break;
    }
  })
});
