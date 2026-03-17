<template>
    <section class="section">
        <Heading class="heading2">Pangasinan Tourist Spots</Heading>
        <div class="grid">
            <!-- Card 1 -->
            <div class="card">
                <div class="card-image">
                <img src="/images/hundred_islands.jpg" alt="Hundred Islands">
                </div>

                <div class="card-content">
                <h3 class="card-title">Hundred Islands</h3>
                <Paragraph>Hundred Islands National Park is one of the most breathtaking natural attractions in Pangasinan, Philippines. Located in Alaminos City, this protected area is made up of more than 120 scattered limestone islands and islets rising from the clear blue waters of the Lingayen Gulf. Each island has its own unique shape and character—some with white sand beaches, others with lush vegetation and rocky cliffs perfect for sightseeing.</Paragraph>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="card">
                <div class="card-image">
                <img src="/images/bolinao_lighthouse.jpg" alt="Bolinao Lighthouse">
                </div>

                <div class="card-content">
                <h3 class="card-title">Bolinao Lighthouse</h3>
                <Paragraph>The Cape Bolinao Lighthouse, also known locally as Punta Piedra Point Lighthouse, is one of the tallest and most historic lighthouses in the Philippines. Built during the Spanish colonial period in 1905, it stands majestically on a hill overlooking the West Philippine Sea.</Paragraph>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="card">
                <div class="card-image">
                <img src="/images/bolinao_falls.jpg" alt="Bolinao Falls">
                </div>

                <div class="card-content">
                <h3 class="card-title">Bolinao Falls</h3>
                <Paragraph>Bolinao Falls is a hidden gem nestled in the countryside of Bolinao, Pangasinan. Known for its cool turquoise waters and refreshing atmosphere, this natural waterfall is surrounded by lush greenery and limestone rock formations.</Paragraph>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .section{
        padding:50px 20px;
    }

    /* Grid */
    .grid {
    display: grid;
    gap: 25px;
    grid-template-columns: 1fr;
    }

    /* Card */
    .card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    transition: 0.3s;
    }

    .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
    }

    /* Image */
    .card-image img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    }

    /* Content */
    .card-content {
    padding: 20px;
    }

    .card-title {
    font-size: 20px;
    margin-bottom: 10px;
    }

    .card-description {
    color: #555;
    line-height: 1.6;
    }

    @media(min-width:768px){
        .grid{
            grid-template-columns:1fr 1fr;
        }
    }

    @media(min-width:1024px){
        .grid{
        grid-template-columns:1fr 1fr 1fr;
        }
    }
</style>