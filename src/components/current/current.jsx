import './current.css'

const Current = () => {
    return (
        <div className={'weather'}>
            <div className={'top'}>
                <div>
                    <p className={'city'}>Moscow</p>
                    <p className={'weather-description'}>Sunny</p>
                </div>

                <img
                    className={'weather-icon'} alt={'weather'} src={'icons/01d.png'}
                />
            </div>

            <div className={'bottom'}>
                <p className={'temperature'}>18°C</p>

                <div className={'details'}>
                    <div className={'parameter-row'}>
                        <span className={'parameter-label'}>Details</span>
                    </div>

                    <div className={'parameter-row'}>
                        <span className={'parameter-label'}>Feels like</span>
                        <span className={'parameter-value'}>23°C</span>
                    </div>

                    <div className={'parameter-row'}>
                        <span className={'parameter-label'}>Wind</span>
                        <span className={'parameter-value'}>12 m/s</span>
                    </div>

                    <div className={'parameter-row'}>
                        <span className={'parameter-label'}>Humidity</span>
                        <span className={'parameter-value'}>20%</span>
                    </div>

                    <div className={'parameter-row'}>
                        <span className={'parameter-label'}>Pressure</span>
                        <span className={'parameter-value'}>1220 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Current