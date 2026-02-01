exports.homepage = async(req, res) => {
  try {
     res.render('index');
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
}

exports.aboutus = async (req, res) => {
  try {
    res.render('about', {
      title: 'About Us',
      bodyClass: 'about-page'
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
};


exports.clubmem = async(req, res) => {
  try {
     
    res.render('club');
  } catch (error) {
    // Note: Corrected 'satus' to 'status'
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
}


exports.log = async(req, res) => {
  try {
    
    res.render('login');
  } catch (error) {
    // Note: Corrected 'satus' to 'status'
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
}

exports.sign = async(req, res) => {
  try {
    
    res.render('signup');
  } catch (error) {
    // Note: Corrected 'satus' to 'status'
    res.status(500).send({ message: error.message || "Error Occurred" });
  }
}
