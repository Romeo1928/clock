import React, {useEffect, useState} from 'react';
import './App.css';


// стрелочные часы
// const Clock = () => {
// 	const [currentTime, setCurrentTime] = useState(getCurrentTime());
//
// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			setCurrentTime(getCurrentTime());
// 		}, 1000);
//
// 		return () => {
// 			clearInterval(interval);
// 		};
// 	}, []);
//
// 	function getCurrentTime() {
// 		const now = new Date();
// 		const hours = now.getHours();
// 		const minutes = now.getMinutes();
// 		const seconds = now.getSeconds();
//
// 		return {
// 			hours: hours,
// 			minutes: minutes,
// 			seconds: seconds,
// 		};
// 	}
//
// 	return (
// 		<div className="clock">
// 			<div
// 				className="hourHand"
// 				style={{
// 					transform: `translateX(-50%) translateY(-100%) rotate(${(currentTime.hours % 12) * 30 + currentTime.minutes / 2}deg)`,
// 				}}
// 			></div>
// 			<div
// 				className="minuteHand"
// 				style={{
// 					transform: `translateX(-50%) translateY(-100%) rotate(${currentTime.minutes * 6}deg)`,
// 				}}
// 			></div>
// 			<div
// 				className="secondHand"
// 				style={{
// 					transform: `translateX(-50%) translateY(-100%) rotate(${currentTime.seconds * 6}deg)`,
// 				}}
// 			></div>
// 		</div>
// 	);
// };
//
// export default Clock;


// -------------------------------------------------------------

// часы формата 22:22:22
function App() {
  const [time, setTime] = useState('');
  // console.log(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const hours = currentTime.getHours().toString().padStart(2, '0');
      const minutes = currentTime.getMinutes().toString().padStart(2, '0');
      const seconds = currentTime.getSeconds().toString().padStart(2, '0');
      const timeString = `${hours}:${minutes}:${seconds}`;
      setTime(timeString);
      // console.log(time)
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <div>
        <h1>{time}</h1>
      </div>
    </div>
  );
}

export default App;

// description
// В этом примере мы используем хук useState для хранения текущего времени в состоянии компонента. Затем мы используем хук useEffect для запуска интервала, который будет обновлять время каждую секунду. Внутри колбэка useEffect мы создаем новый экземпляр Date, получаем значения часов, минут и секунд, форматируем их в нужный формат и устанавливаем время в состояние.
//
//    Функция clearInterval вызывается в функции очистки useEffect, чтобы остановить интервал, когда компонент будет размонтирован или изменится зависимость (в данном случае зависимостей нет, поэтому массив зависимостей пуст).
//
// Возвращаемый JSX-код отображает текущее время внутри тега <h1>. Вы можете использовать этот компонент в любом другом компоненте, чтобы отобразить часы.
// Конечно! Давайте разберем код по шагам:
//
// 1. Импортируем необходимые зависимости:
//    ```jsx
// import React, { useState, useEffect } from 'react';
// ```
// В этом шаге мы импортируем необходимые модули `React`, `useState` и `useEffect` из библиотеки React.
//
// 2. Определяем компонент `Clock`:
// ```jsx
// function Clock() {
//   // ...
// }
// ```
// Мы определяем функциональный компонент `Clock`, который будет отображать текущее время.
//
// 3. Используем хук `useState` для хранения времени в состоянии компонента:
//    ```jsx
// const [time, setTime] = useState('');
// ```
// Мы используем хук `useState` для создания состояния `time` и функции `setTime` для обновления состояния. Изначально устанавливаем пустую строку в качестве начального значения времени.
//
// 4. Используем хук `useEffect` для запуска интервала и обновления времени:
//    ```jsx
// useEffect(() => {
//   // ...
// }, []);
// ```
// Мы используем хук `useEffect` для выполнения эффекта (запуск интервала) внутри функционального компонента. Пустой массив зависимостей `[]` гарантирует, что этот эффект будет выполнен только после первого рендера компонента.
//
// 5. Внутри колбэка `useEffect` создаем интервал для обновления времени:
//    ```jsx
// const interval = setInterval(() => {
//   // ...
// }, 1000);
// ```
// Мы используем функцию `setInterval` для создания интервала, который будет вызывать колбэк-функцию каждую секунду.
//
// 6. В колбэке интервала получаем текущее время и обновляем состояние `time`:
// ```jsx
// const currentTime = new Date();
// const hours = currentTime.getHours().toString().padStart(2, '0');
// const minutes = currentTime.getMinutes().toString().padStart(2, '0');
// const seconds = currentTime.getSeconds().toString().padStart(2, '0');
// const timeString = `${hours}:${minutes}:${seconds}`;
// setTime(timeString);
// ```
// Мы создаем новый экземпляр `Date` для получения текущего времени. Затем мы получаем значения часов, минут и секунд с использованием методов объекта `Date`. Метод `padStart(2, '0')` используется для добавления ведущего нуля, если значение меньше 10. Мы форматируем полученные значения в строку `timeString` в формате "часы:минуты:секунды" и обновляем состояние `time` с помощью функции `setTime`.
//
// 7. Возвращаем JSX-код для отображения времени:
//    ```jsx
// return (
//   <div>
//     <h1>{time}</h1>
//   </div>
// );
// ```
// Мы возвращаем JSX-код, содержащий элемент `<h1>`, внутри которого отображается значение времени из состояния `time`.
//
// 8. Экспортируем компонент `Clock`:
// ```jsx
// export default Clock;
// ```
// Мы экспортируем компонент `Clock`, чтобы он мог быть использован в других компонентах.
//
//    Таким образом, этот код создает компонент `Clock`, который отображает текущее время в формате "часы:минуты:секунды". Интервал обновления времени запускается при монтировании компонента и останавливается при его размонтировании.
