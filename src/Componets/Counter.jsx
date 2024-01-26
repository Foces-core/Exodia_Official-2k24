import {useTimer} from 'react-timer-hook';
function Counter()
{
    const TimerDivStyle="flex flex-col items-center gap-3 font-bold"
    const TimerStyle="bg-[#9329FE] rounded-full px-5 text-2xl py-1 flex items-center justify-center "
    const expiryDate = new Date(2024, 0, 30); // Set the expiry date to January 30, 2024
    const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp: expiryDate.getTime() });
    return(
        <>
        <div className="flex self-center gap-5 text-white w-fit">
            <div className={TimerDivStyle}>
                <p className={TimerStyle}>{days}</p>
                <p>Days</p>
            </div>
            <div className={TimerDivStyle}>
                <p className={TimerStyle}>{hours}</p>
                <p>Hrs</p>
            </div>
            <div className={TimerDivStyle}>
                <p className={TimerStyle}>{minutes}</p>
                <p>Min</p>
            </div>

        </div>
        </>
    )
}
export default Counter;