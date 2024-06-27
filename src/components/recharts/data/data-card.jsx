import PropTypes from 'prop-types'
import Icones from './../../Icones/icones';



export function KeyDatasCard({
    title = '',
    value = '',
    color = '',
    unit = '',
}) {
    return (
        <aside className="ss-data-card">
            <Icones
                className="ss-data-card__icon"
                title={title}
                type={title.toLowerCase()}
                color={color}
            />
            <div className="ss-data-card__data">
                <h3 className="ss-data-card__title">{title}</h3>
                <p className="ss-data-card__value">
                    {value}
                    {unit}
                </p>
            </div>
        </aside>
    )
}

KeyDatasCard.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number,
    unit: PropTypes.string,
    color: PropTypes.string,
}
