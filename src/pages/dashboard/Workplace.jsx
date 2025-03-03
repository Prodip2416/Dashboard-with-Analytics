import DemoColumn from '../../components/dashboard/workplace/DemoColumn';
import DemoMindMap from '../../components/dashboard/workplace/DemoMindMap';
import DemoVenn from '../../components/dashboard/workplace/DemoVenn';

const Workplace = () => {
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
        <div className="bg-white p-4 shadow">
          {' '}
          <DemoMindMap />{' '}
        </div>
        <div className="bg-white p-4 shadow">
          <DemoVenn />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5">
        <div className="bg-white p-4 shadow">
          <DemoColumn />
        </div>
      </div>
    </main>
  );
};

export default Workplace;
