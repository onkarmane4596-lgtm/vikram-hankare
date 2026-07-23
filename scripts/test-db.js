const fs = require('fs');
const { Client } = require('pg');

async function testUrl(url) {
    return new Promise((resolve) => {
        const client = new Client({
            connectionString: url,
            ssl: { rejectUnauthorized: false }
        });
        client.connect((err) => {
            if (err) {
                resolve(`FAIL: ${err.message}`);
            } else {
                client.end();
                resolve(`SUCCESS`);
            }
        });
    });
}

async function run() {
    const urls = [
        "postgresql://postgres.rwjgkgkwkaxlivtrqvck:SkylineCyber%40123@aws-1-ap-northeast-2.pooler.supabase.com:6543/postgres",
        "postgresql://skyline.rwjgkgkwkaxlivtrqvck:SkylineCyber%40123@aws-1-ap-northeast-2.pooler.supabase.com:6543/postgres",
        "postgresql://postgres:SkylineCyber%40123@db.rwjgkgkwkaxlivtrqvck.supabase.co:5432/postgres",
        "postgresql://postgres:SkylineCyber%40123@aws-0-ap-northeast-2.pooler.supabase.com:5432/postgres",
        "postgresql://postgres.rwjgkgkwkaxlivtrqvck:SkylineCyber%40123@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres"
    ];

    let out = [];
    for (const u of urls) {
        const res = await testUrl(u);
        out.push(u + " => " + res);
    }
    fs.writeFileSync('scripts/test-db-out.txt', out.join('\n'));
}
run();
