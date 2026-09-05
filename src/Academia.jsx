import nordicMapImage from './assets/nordisk_karta.jpeg';

function Academia() {
    return (
        <div 
            className="academia-container" 
            style={{ backgroundImage: `url(${nordicMapImage})` }}
        >
            <div className="academia-card">
                <h2>Academic Journey</h2>
                
                <p>
                    My academic career spans several years of research across Nordic universities, starting with a Master's degree in 
                    <strong> Jyväskylä</strong> (Finland) focused on muscle biology and hypertrophy.
                </p>
                <p>
                    I then moved to <strong>Lund</strong> (Sweden) for my PhD research on muscular dystrophies and microRNAs. 
                    This was followed by a first post-doctoral fellowship in <strong>Odense</strong> (Denmark) studying ncRNAs and obesity, 
                    and a final post-doctoral position in <strong>Kuopio</strong> (Finland) researching the cell cycle and leukaemia.
                </p>
                <p>
                    Throughout these positions, I routinely engaged in bioinformatics work — including microRNA sequencing during my PhD, 
                    RNA sequencing in Odense, and workflow management with Snakemake in Kuopio.
                </p>
            </div>
        </div>
    );
}

export default Academia;
