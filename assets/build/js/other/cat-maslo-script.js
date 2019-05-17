$(document).ready(function () {
  $('#MASLO-INPUTS-FILTER').click(function () {
    var masloRadioVal = $('input[name="maslo_type"]:checked').val();
    $('.appointment-filter').hide(); // Назначение (Все, Автомобили, Грузовики, комбайны, трактора)
    $('.oil-type-filter').hide(); // Тип масла (Все, 2Т, 4Т, Моторное)
    $('.viscosity-filter').hide(); // Вязкость (0W-16)
    $('.manufacturer-filter').hide(); // Производитель (ENI)
    $('.composition-filter').hide(); // Состав (Синтетическое)
    $('.engine-type-filter').hide(); // Тип двигателя (Бензиновый)
    $('.specification-acea-filter').hide(); // Спецификация ACEA (А1/В1)
    $('.specification-api-filter').hide(); // Спецификация API (CB, CC)
    $('.specification-oem-filter').hide(); // Спецификация OEM (BMW Longlife-01 FE)
    $('.brand-filter').hide(); // Бренд (Castrol, AMSOIL)
    $('.specification-filter').hide(); // Спецификации (BMW LongLife-01 FE)
    $('.access-filter').hide(); // Допуски (Allison C-3, Allison C-4)
    $('.color-filter').hide(); // Цвет (Желтый, Зеленый)
    $('.specification-2-filter').hide(); // Спецификация (DOT 3, DOT 4)
    $('.brand-2-filter').hide(); // Бренд (Ниагара, Полярник)
    $('.class-filter').hide(); // Класс (ОЖ-К (концентрат), ОЖ-40)

    switch (masloRadioVal) {
      case 'maslo_grease':
        $('.appointment-filter').show(); // Назначение (Все, Автомобили, Грузовики, комбайны, трактора)
        $('.oil-type-filter').show(); // Тип масла (Все, 2Т, 4Т, Моторное)
        $('.viscosity-filter').show(); // Вязкость (0W-16)
        $('.manufacturer-filter').show(); // Производитель (ENI)
        $('.composition-filter').show(); // Состав (Синтетическое)
        $('.engine-type-filter').show(); // Тип двигателя (Бензиновый)
        $('.specification-acea-filter').show(); // Спецификация ACEA (А1/В1)
        $('.specification-api-filter').show(); // Спецификация API (CB, CC)
        $('.specification-oem-filter').show(); // Спецификация OEM (BMW Longlife-01 FE)
        break;
      case 'fluid':
        $('.brand-filter').show(); // Бренд (Castrol, AMSOIL)
        $('.specification-filter').show(); // Спецификации (BMW LongLife-01 FE)
        $('.access-filter').show(); // Допуски (Allison C-3, Allison C-4)
        break;
      case 'antifreeze':
        $('.brand-filter').show(); // Бренд (Castrol, AMSOIL)
        $('.specification-filter').show(); // Спецификации (BMW LongLife-01 FE)
        $('.access-filter').show(); // Допуски (Allison C-3, Allison C-4)
        $('.color-filter').show(); // Цвет (Желтый, Зеленый)
        break;
      case 'tosol':
        $('.brand-2-filter').show(); // Бренд (Ниагара, Полярник)
        $('.class-filter').show(); // Класс (ОЖ-К (концентрат), ОЖ-40)
        break;
      case 'brake_fluid':
        $('.brand-2-filter').show(); // Бренд (Ниагара, Полярник)
        $('.specification-2-filter').show(); // спецификация (DOT 3, DOT 4)
        break;
    }
  })
});
