import HeaderBox from '@/components/HeaderBox';
import TotalBalaceBox from '@/components/TotalBalaceBox';

const Home = () => {
  const loggedIn = { firstName: 'Gravizz' };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || 'Guest'}
            subtext="Access and manage your account and transaction efficiently"
          />
          <TotalBalaceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
