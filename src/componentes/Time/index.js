import Colaborador from '../Colaborador'
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    return (
        (props.colaboradores.length > 0) && <section className='time' style={{ backgroundColor: hexToRgba(props.cor, '0.3') }}>
            <input onChange={evento => props.mudarCor(evento.target.value,props.id)} value={props.cor} type='color' className='input-cor'/>
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                
                return (
                    <Colaborador
                        corDeFundo={props.cor}
                        favorito={colaborador.favorito}
                        key={colaborador.id}
                        id={colaborador.id}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem} 
                        aoDeletar={props.aoDeletar}
                        aoFavoritar={props.aoFavoritar}
                    />)
                    })}
            </div>
        </section>
    )
}

export default Time