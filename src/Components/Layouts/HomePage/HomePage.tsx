import { useTranslation } from 'react-i18next'
import homeimg from '../../../assets/homeimg.jpeg'

const HomePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <h1>{t('homeTitle')}</h1>
          </div>
          <div className='col-6'>
            <img src={homeimg} width={500} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
export default HomePage