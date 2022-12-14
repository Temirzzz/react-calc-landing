import Accordion from '../../Accordion/Accordion';

function CalcNote() {
  return (
    <Accordion
      title="Калькулятор позволяет произвести ориентировочный расчет негосударственной пенсии"
      body="Данный расчет не является публичной офертой, прогнозом деятельности
            АО «НПФ «Компания» или гарантией дохода в будущем. Возможно
            увеличение или уменьшение дохода от размещения средств пенсионных
            резервов, результаты инвестирования в прошлом не определяют доходов
            в будущем. Государство не гарантирует доходности размещения
            пенсионных резервов. Необходимо внимательно ознакомиться с Уставом
            Фонда и его Пенсионными правилами перед заключением пенсионного
            договора."
    />
  );
}

export default CalcNote;
