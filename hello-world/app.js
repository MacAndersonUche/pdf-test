const fs = require('fs');

exports.handler = async (event, context) => {
  try {
    const pdf = fs.readFileSync('heyyy.pdf');
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/pdf',
      },
      body: pdf.toString('base64'),
      isBase64Encoded: true,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
}