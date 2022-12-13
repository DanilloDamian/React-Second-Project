import './Colaborador.css';
import {AiFillCloseCircle,AiFillHeart,AiOutlineHeart} from 'react-icons/ai';

const Colaborador = ({id,favorito,nome, imagem, cargo, corDeFundo, aoDeletar, aoFavoritar}) => {
    function favoritar(){
        aoFavoritar(id)
    }
    const propsfavorito={
        size:30,
        onClick: favoritar
    }
    return (
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={30}
                className='deletar' 
                onClick={() =>aoDeletar(id)}
            />  

            <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className='favoritar'>
                    {favorito 
                    ? <AiFillHeart {...propsfavorito} color='#ff0000' />
                    :<AiOutlineHeart {...propsfavorito} color='black' />
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador