import BarChart from "components/bar-chart";
import DataTable from "components/data-table";
import DonutChart from "components/donut-chart";
import Footer from "components/footer";
import NavBar from "components/navbar";

function Dashboard() {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de Vendas</h1>
        
                <div className="row px-3">
                    <div className="col-sm-6">
                    <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
                    <BarChart />
                    </div>        
                    <div className="col-sm-6">
                    <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
                    <DonutChart />
                    </div>        
                </div>
        
                <div className="py-3">
                    <h2 className="text-primary">Todas Vendas</h2>
                </div>
        
                <DataTable />
        
            </div>
            <Footer />
        </>
    );
}
  
export default Dashboard;