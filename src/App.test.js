import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  <div className="w-full min-h-screen bg-white flex flex-row">
      <Router>
        <Sidebar/>
        <Route path="/login" component={Login} />
      
        <div>
          <section className='flex-1'>
            <div className='p-10 bg-gray-300 rounded m-10'>
              <div className='flex flex-row'>
                <div>
                  {/* <img src={} alt="icon"/> */}
                  <p>Image</p>
                </div>
                <div className='ml-5'>
                  <p>Current Balance</p>
                  <h4>IDR 75.000.0000</h4>
                </div>
              </div>
            </div>
          </section>
          <section className='flex-1'>
            <div className='p-10 bg-gray-300 rounded m-10'>
              <div className='flex flex-row'>
                <div>
                  {/* <img src={} alt="icon"/> */}
                  <p>Image</p>
                </div>
                <div className='ml-5'>
                  <p>Top Up</p>
                </div>
              </div>
            </div>
          </section>
          <section className='flex-1'>
            <div className='p-10 bg-gray-300 rounded m-10'>
              <div className='flex flex-row'>
                <div>
                  {/* <img src={} alt="icon"/> */}
                  <p>Image</p>
                </div>
                <div className='ml-5'>
                  <p>Transfer</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
        <section className='flex-1'>
            <div className='p-10 bg-gray-300 rounded m-10'>
                <div className='ml-5'>
                  <p>My Profile</p>
                  <h4>Image</h4>
                  <h4>Filza Harry</h4>
                  <h4>0895636701586</h4>
              </div>
            </div>
          </section>
        </div>
      </Router>
    </div>
});
