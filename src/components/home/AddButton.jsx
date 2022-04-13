import React, { useState } from "react";
import {
  Dialog,
  Box,
  DialogContent,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import DateComponent from "./DateComponent";
import axios from "axios";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const useStyles = makeStyles({
  container: {
    background: "#2A3E4C",
    width: "100%",
    height: "85vh",
  },
  heading: {
    color: "#fff",
    margin: "20px 10px 10px 20px",
    fontSize: 20,
  },
  textFieldContainer: {
    display: "flex",
    flexFlow: "row wrap",
    margin: "20px auto",
    paddingLeft: 7,
    "&>*": {
      width: "22vw",
    },
  },
  button: {
    width: "48%",
  },
  datepicker: {
    borderRadius: 4,
    margin: "20px 5px",
    "&>*": {
      width: "100%",
      borderRadius: 4,
      background: "#ffffff",
    },
  },
});

const AddButton = ({ openAdd, setOpenAdd }) => {
  const [businessCode, setBusinessCode] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [businessYear, setBusinessYear] = useState();
  const [documentId, setDocumentId] = useState("");
  const [invoiceCurrency, setInvoiceCurrency] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [postingId, setPostingId] = useState("");
  const [totalOpenAmount, setTotalOpenAmount] = useState("");
  const [customerPaymentTerms, setCustomerPaymentTerms] = useState("");
  const [invoiceId, setInvoiceId] = useState("");
  const [clearDate, setClearDate] = useState(null);
  const [postingDate, setPostingDate] = useState(null);
  const [docCreateDate, setDocCreateDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [baselineCreateDate, setBaselineCreateDate] = useState(null);

  const classes = useStyles();
  const closeDialog = () => {
    setOpenAdd(false);
  };

  const handleSubmit = () => {
    // axios
    //   .get(`http://localhost:8080/`)
    //   .then((data) => {
    //     <h1>"Response is successfully submitted!"</h1>;
    //   })
    //   .catch((err) => console.log(err, "err here test"));

    axios.post(
      `https://reqres.in/api/users`,
      {},
      {
        headers: { "Content-Type": "application/json" },
        params: {
          business_code: businessCode,
          cust_number: customerNumber,
          buisness_year: businessYear,
          doc_id: documentId,
          invoice_currency: invoiceCurrency,
          document_type: documentType,
          posting_id: postingId,
          total_open_amount: totalOpenAmount,
          cust_payment_terms: customerPaymentTerms,
          invoice_id: invoiceId,
          clear_date: clearDate,
          posting_date: postingDate,
          document_create_date: docCreateDate,
          due_in_date: dueDate,
          baseline_create_date: baselineCreateDate,
        },
      }
    );

    // axios.post(
    //   `http://localhost:8081/crud/addcustomer`,
    //   {},
    //   {
    //     headers: { "Content-Type": "application/json" },
    //     params: {
    //       business_code: businessCode,
    //       cust_number: customerNumber,
    //       buisness_year: businessYear,
    //       doc_id: documentId,
    //       invoice_currency: invoiceCurrency,
    //       document_type: documentType,
    //       posting_id: postingId,
    //       total_open_amount: totalOpenAmount,
    //       cust_payment_terms: customerPaymentTerms,
    //       invoice_id: invoiceId,
    //     },
    //   }
    // );

    console.log(
      "at handle submit",
      businessCode,
      customerNumber,
      businessYear,
      documentId,
      invoiceCurrency,
      documentType,
      postingId,
      totalOpenAmount,
      customerPaymentTerms,
      invoiceId,
      clearDate,
      postingDate,
      docCreateDate,
      dueDate,
      baselineCreateDate
    );
    // setBusinessCode("test");
    // setCustomerNumber("test");
    // setBusinessYear("test");
    // setDocumentId("test");
    // setInvoiceCurrency("test");
    // setDocumentType("test");
    // setPostingId("test");
    // setTotalOpenAmount("test");
    // setCustomerPaymentTerms("test");
    // setInvoiceId("test");
    // // setName("");
    // // setName("");
    // // setCustomerNo("");
    // // setInvoice("");
    // // setInvoiceAmount("");
    // // setDueDate("");
    // // setNotes("");
    //setValue(null);
  };

  return (
    <Dialog
      open={openAdd}
      onClose={() => closeDialog()}
      sx={{
        "& .MuiPaper-root": {
          maxWidth: "unset",
        },
      }}
    >
      <DialogContent className={classes.container}>
        <Typography className={classes.heading}>Add</Typography>
        <Box className={classes.textFieldContainer}>
          <TextField
            id="filled-basic"
            label="Business Code"
            variant="filled"
            style={{ margin: "20px 5px", background: "#ffffff" }}
            value={businessCode}
            onChange={(e) => {
              setBusinessCode(e.target.value);
            }}
          />
          <TextField
            id="filled-basic"
            label="Customer Number"
            variant="filled"
            style={{ margin: "20px 5px", background: "#ffffff" }}
            value={customerNumber}
            onChange={(e) => {
              setCustomerNumber(e.target.value);
            }}
          />
          <Box className={classes.datepicker}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label={"Clear Date"}
                value={clearDate}
                onChange={(newValue) => {
                  setClearDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>

          {/* <DateComponent heading="Clear Date" /> */}
          <TextField
            id="filled-basic"
            label="Business Year"
            variant="filled"
            style={{ margin: "20px 5px", background: "#ffffff" }}
            value={businessYear}
            onChange={(e) => {
              setBusinessYear(e.target.value);
            }}
          />
          <TextField
            id="filled-basic"
            label="Document Id"
            variant="filled"
            style={{ margin: "20px 5px", background: "#ffffff" }}
            value={documentId}
            onChange={(e) => {
              setDocumentId(e.target.value);
            }}
          />

          {/* <DateComponent heading="Clear Date" />
          <DateComponent heading="Clear Date" />
          <DateComponent heading="Clear Date" /> */}
          <Box className={classes.datepicker}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label={"Posting Date"}
                value={postingDate}
                onChange={(newValue) => {
                  setPostingDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>

          <Box className={classes.datepicker}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label={"Document Create Date"}
                value={docCreateDate}
                onChange={(newValue) => {
                  setDocCreateDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>

          <Box className={classes.datepicker}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label={"Due Date"}
                value={dueDate}
                onChange={(newValue) => {
                  setDueDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>

          <TextField
            id="filled-basic"
            label="Invoice Currency"
            variant="filled"
            style={{ margin: "20px 5px", background: "#ffffff" }}
            value={invoiceCurrency}
            onChange={(e) => {
              setInvoiceCurrency(e.target.value);
            }}
          />
          <TextField
            id="filled-basic"
            label="Document Type"
            variant="filled"
            style={{ margin: "20px 5px", background: "#ffffff" }}
            value={documentType}
            onChange={(e) => {
              setDocumentType(e.target.value);
            }}
          />
          <TextField
            id="filled-basic"
            label="Posting Id"
            variant="filled"
            style={{ margin: "20px 5px", background: "#ffffff" }}
            value={postingId}
            onChange={(e) => {
              setPostingId(e.target.value);
            }}
          />
          <TextField
            id="filled-basic"
            label="Total Open Amount"
            variant="filled"
            style={{ margin: "20px 5px", background: "#ffffff" }}
            value={totalOpenAmount}
            onChange={(e) => {
              setTotalOpenAmount(e.target.value);
            }}
          />
          {/* <DateComponent heading="Clear Date" /> */}
          <Box className={classes.datepicker}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label={"Baseline Create Date"}
                value={baselineCreateDate}
                onChange={(newValue) => {
                  setBaselineCreateDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>

          <TextField
            id="filled-basic"
            label="Customer Payment Terms"
            variant="filled"
            style={{ margin: "20px 5px", background: "#ffffff" }}
            value={customerPaymentTerms}
            onChange={(e) => {
              setCustomerPaymentTerms(e.target.value);
            }}
          />
          <TextField
            id="filled-basic"
            label="Invoice Id"
            variant="filled"
            style={{ margin: "20px 5px", background: "#ffffff" }}
            value={invoiceId}
            onChange={(e) => {
              setInvoiceId(e.target.value);
            }}
          />
        </Box>
        <Button
          className={classes.button}
          style={{
            color: "#ffffff",
            border: "1px solid #ffffff",
            margin: "0 15px",
          }}
          variant="outlined"
          onClick={handleSubmit}
        >
          Add
        </Button>
        <Button
          className={classes.button}
          style={{ color: "#ffffff", border: "1px solid #ffffff" }}
          variant="outlined"
          onClick={closeDialog}
        >
          Cancel
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddButton;
