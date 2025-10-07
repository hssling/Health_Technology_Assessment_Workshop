#!/usr/bin/env python3
"""
HTA Workshop Analytics Dashboard
Streamlit-based dashboard for participant analytics and workshop metrics
"""

import streamlit as st
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import json
from datetime import datetime
import calendar

# Configure page
st.set_page_config(
    page_title="HTA Workshop 2025 Analytics",
    page_icon="🏥",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for PGIMER theme
st.markdown("""
<style>
    .main-header {
        background: linear-gradient(135deg, #0066CC, #CC0066);
        color: white;
        padding: 2rem;
        border-radius: 10px;
        text-align: center;
        margin-bottom: 2rem;
    }
    .metric-card {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 10px;
        border-left: 4px solid #0066CC;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
    }
    .sidebar-content {
        background: linear-gradient(180deg, #0066CC, #CC0066);
        color: white;
        padding: 2rem 1rem;
    }
</style>
""", unsafe_allow_html=True)

# Sample data generation (replace with actual Google Sheets data)
def generate_sample_data():
    np.random.seed(42)

    # Participant data
    participants = []
    for i in range(45):
        reg_date = pd.Timestamp('2025-01-01') + pd.Timedelta(days=np.random.randint(0, 30))

        participant = {
            'id': f'P{i+1:03d}',
            'name': f'Participant {i+1}',
            'email': f'participant{i+1}@example.com',
            'designation': np.random.choice([
                'PG Resident (MD)', 'PG Resident (MS)', 'Assistant Professor',
                'Researcher', 'Medical Officer', 'Consultant'
            ]),
            'institution': np.random.choice([
                'PGIMER Chandigarh', 'AIIMS Delhi', 'CMC Vellore', 'KMC Manipal',
                'MAMC Delhi', 'JIPMER Puducherry', 'Other'
            ]),
            'specialty': np.random.choice([
                'Community Medicine', 'Internal Medicine', 'Surgery', 'Pediatrics',
                'Obstetrics & Gynecology', 'Pathology', 'Other'
            ]),
            'qualification': np.random.choice([
                'MBBS', 'MD/MS', 'DM/MCh', 'PhD', 'MPH'
            ]),
            'experience_years': np.random.randint(1, 15),
            'hta_knowledge': np.random.choice([
                'None - Complete beginner', 'Basic understanding',
                'Intermediate knowledge', 'Advanced expertise'
            ]),
            'category': np.random.choice(['PG Resident (₹2,000)', 'Faculty/Researcher (₹3,000)']),
            'payment_status': np.random.choice(['Paid', 'Pending'], p=[0.85, 0.15]),
            'registration_date': reg_date,
            'attendance_day1': np.random.choice(['Present', 'Absent'], p=[0.92, 0.08]),
            'attendance_day2': np.random.choice(['Present', 'Absent'], p=[0.88, 0.12]),
            'quiz_score': np.random.normal(75, 15) if np.random.random() > 0.1 else None,
            'feedback_rating': np.random.randint(3, 6),
            'accommodation_required': np.random.choice(['Yes', 'No'], p=[0.3, 0.7])
        }

        participants.append(participant)

    return pd.DataFrame(participants)

# Load workshop metadata
@st.cache_data
def load_workshop_metadata():
    try:
        with open('HTA_Workshop_2025/06_Reports/workshop_metadata.json', 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        return {
            'title': 'HTA Workshop 2025',
            'date': 'February 15-16, 2025',
            'venue': 'PGIMER Chandigarh'
        }

# Main dashboard
def main():
    # Load metadata
    metadata = load_workshop_metadata()

    # Sidebar
    with st.sidebar:
        st.markdown('<div class="sidebar-content">', unsafe_allow_html=True)
        st.title("🏥 HTA Workshop Dashboard")
        st.markdown("---")
        st.markdown("**Workshop Details:**")
        st.write(f"📅 {metadata['date']}")
        st.write(f"📍 {metadata['venue']}")
        st.write("🎯 Target: 50 participants")
        st.write("📧 Registration System ACTIVE")

        # Navigation
        st.markdown("---")
        selected_page = st.selectbox("Navigate to:", [
            "📊 Overview Dashboard",
            "👥 Participant Analytics",
            "💰 Payment Analytics",
            "📈 Attendance Tracking",
            "🧠 Assessment Results",
            "⭐ Feedback & Ratings",
            "📋 Reports & Downloads"
        ])
        st.markdown('</div>', unsafe_allow_html=True)

    # Main content
    if selected_page == "📊 Overview Dashboard":
        show_overview_dashboard(metadata)
    elif selected_page == "👥 Participant Analytics":
        show_participant_analytics()
    elif selected_page == "💰 Payment Analytics":
        show_payment_analytics()
    elif selected_page == "📈 Attendance Tracking":
        show_attendance_tracking()
    elif selected_page == "🧠 Assessment Results":
        show_assessment_results()
    elif selected_page == "⭐ Feedback & Ratings":
        show_feedback_ratings()
    elif selected_page == "📋 Reports & Downloads":
        show_reports_downloads()

def show_overview_dashboard(metadata):
    st.markdown('<div class="main-header">', unsafe_allow_html=True)
    st.title("🏥 HTA Workshop 2025 Analytics Dashboard")
    st.markdown("**PGIMER Chandigarh** • Real-time Insights & Data Visualization")
    st.markdown('</div>', unsafe_allow_html=True)

    # Load sample data
    df = generate_sample_data()

    # Key metrics row
    col1, col2, col3, col4 = st.columns(4)

    with col1:
        total_registrations = len(df)
        st.markdown('<div class="metric-card">', unsafe_allow_html=True)
        st.metric("Total Registrations", total_registrations, f"{50-total_registrations} remaining")
        st.markdown('</div>', unsafe_allow_html=True)

    with col2:
        paid_count = len(df[df['payment_status'] == 'Paid'])
        st.markdown('<div class="metric-card">', unsafe_allow_html=True)
        st.metric("Payments Completed", paid_count, f"{paid_count/len(df)*100:.1f}%")
        st.markdown('</div>', unsafe_allow_html=True)

    with col3:
        attendance_day1 = len(df[df['attendance_day1'] == 'Present'])
        st.markdown('<div class="metric-card">', unsafe_allow_html=True)
        st.metric("Day 1 Attendance", attendance_day1, f"{attendance_day1/len(df)*100:.1f}%")
        st.markdown('</div>', unsafe_allow_html=True)

    with col4:
        quiz_scores = df['quiz_score'].dropna()
        avg_score = quiz_scores.mean() if len(quiz_scores) > 0 else 0
        st.markdown('<div class="metric-card">', unsafe_allow_html=True)
        st.metric("Avg Quiz Score", f"{avg_score:.1f}%", "Above target")
        st.markdown('</div>', unsafe_allow_html=True)

    # Charts row
    col1, col2 = st.columns(2)

    with col1:
        st.subheader("📅 Registration Trend")
        daily_regs = df.groupby(df['registration_date'].dt.date).size().reset_index()
        daily_regs.columns = ['Date', 'Registrations']

        fig = px.line(daily_regs, x='Date', y='Registrations',
                     title="Daily Registration Pattern")
        fig.update_traces(mode='lines+markers', line_color='#0066CC', marker_color='#CC0066')
        st.plotly_chart(fig, use_container_width=True)

    with col2:
        st.subheader("🏥 Participant Distribution by Institution")
        inst_counts = df['institution'].value_counts()

        fig = px.pie(values=inst_counts.values, names=inst_counts.index,
                    title="Institution Representation",
                    color_discrete_sequence=px.colors.sequential.Blues_r)
        fig.update_traces(textinfo='percent+label')
        st.plotly_chart(fig, use_container_width=True)

    # Progress indicators
    st.subheader("📊 Workshop Progress")
    col1, col2, col3 = st.columns(3)

    with col1:
        st.metric("Registration Progress", f"{total_registrations}/50", f"{(total_registrations/50)*100:.1f}%")

    with col2:
        confirmed_seats = len(df[df['payment_status'] == 'Paid'])
        st.metric("Confirmed Seats", f"{confirmed_seats}/50", f"{(confirmed_seats/50)*100:.1f}%")

    with col3:
        active_participants = len(df[(df['payment_status'] == 'Paid') &
                                   (df['attendance_day1'].isin(['Present', 'Unknown']))])
        st.metric("Active Participants", active_participants, "Workshop ready")

def show_participant_analytics():
    st.subheader("👥 Participant Analytics")

    df = generate_sample_data()

    # Demographics
    col1, col2, col3 = st.columns(3)

    with col1:
        st.markdown("### Academic Qualifications")
        qual_counts = df['qualification'].value_counts()
        fig = px.bar(x=qual_counts.index, y=qual_counts.values,
                    title="Qualification Distribution", color=qual_counts.values,
                    color_continuous_scale='Blues')
        st.plotly_chart(fig, use_container_width=True)

    with col2:
        st.markdown("### Medical Specialties")
        spec_counts = df['specialty'].value_counts()
        fig = px.bar(x=spec_counts.index, y=spec_counts.values,
                    title="Specialty Distribution", color=spec_counts.values,
                    color_continuous_scale='Reds', orientation='h')
        st.plotly_chart(fig, use_container_width=True)

    with col3:
        st.markdown("### HTA Knowledge Levels")
        knowledge_counts = df['hta_knowledge'].value_counts()
        fig = px.pie(values=knowledge_counts.values, names=knowledge_counts.index,
                    title="Prior HTA Knowledge")
        st.plotly_chart(fig, use_container_width=True)

    # Experience analysis
    st.markdown("### Experience Distribution")
    exp_bins = pd.cut(df['experience_years'], bins=[0, 2, 5, 10, 15, 20],
                     labels=['0-2 years', '3-5 years', '6-10 years', '11-15 years', '15+ years'])
    exp_counts = exp_bins.value_counts()

    fig = px.bar(x=exp_counts.index, y=exp_counts.values,
                title="Years of Professional Experience",
                color=exp_counts.values, color_continuous_scale='Purples')
    st.plotly_chart(fig, use_container_width=True)

def show_payment_analytics():
    st.subheader("💰 Payment Analytics")

    df = generate_sample_data()

    # Payment status
    col1, col2 = st.columns(2)

    with col1:
        st.markdown("### Payment Status Overview")
        payment_status = df['payment_status'].value_counts()

        fig = make_subplots(rows=1, cols=2, specs=[[{'type':'domain'}, {'type':'table'}]])

        # Pie chart
        fig.add_trace(go.Pie(labels=payment_status.index, values=payment_status.values,
                           name="Payment Status", marker_colors=['#28A745', '#DC3545']), 1, 1)

        # Revenue table
        revenue_data = []
        for category in df['category'].unique():
            cat_df = df[df['category'] == category]
            paid_count = len(cat_df[cat_df['payment_status'] == 'Paid'])
            if '2,000' in category:
                amount_per = 2000
            else:
                amount_per = 3000
            total_revenue = paid_count * amount_per
            revenue_data.append([category, paid_count, f"₹{amount_per:,}",
                               f"₹{total_revenue:,}", f"{paid_count/len(cat_df)*100:.1f}%"])

        fig.add_trace(go.Table(
            header=dict(values=['Category', 'Paid Count', 'Rate', 'Revenue', 'Completion %']),
            cells=dict(values=np.array(revenue_data).T)
        ), 1, 2)

        fig.update_layout(title="Payment Status & Revenue Analysis")
        st.plotly_chart(fig, use_container_width=True)

    with col2:
        st.markdown("### Payment Trend")
        df_paid = df[df['payment_status'] == 'Paid'].copy()
        df_paid['payment_date'] = df_paid['registration_date']

        daily_payments = df_paid.groupby(df_paid['payment_date'].dt.date).size()

        fig = px.area(x=daily_payments.index, y=daily_payments.values,
                     title="Daily Payment Completions",
                     color_discrete_sequence=['#28A745'])
        st.plotly_chart(fig, use_container_width=True)

    # Outstanding payments
    st.markdown("### Pending Payments")
    pending_df = df[df['payment_status'] == 'Pending']
    if len(pending_df) > 0:
        st.dataframe(pending_df[['name', 'email', 'institution', 'mobile', 'category']])
    else:
        st.success("✅ All payments completed!")

def show_attendance_tracking():
    st.subheader("📈 Attendance Tracking")

    df = generate_sample_data()

    # Overall attendance
    col1, col2, col3 = st.columns(3)

    with col1:
        day1_attendance = len(df[df['attendance_day1'] == 'Present'])
        st.metric("Day 1 Attendance", f"{day1_attendance}/{len(df)}",
                 f"{day1_attendance/len(df)*100:.1f}%")

    with col2:
        day2_attendance = len(df[df['attendance_day2'] == 'Present'])
        st.metric("Day 2 Attendance", f"{day2_attendance}/{len(df)}",
                 f"{day2_attendance/len(df)*100:.1f}%")

    with col3:
        both_days = len(df[(df['attendance_day1'] == 'Present') &
                          (df['attendance_day2'] == 'Present')])
        st.metric("Full Attendance", f"{both_days}/{len(df)}",
                 f"{both_days/len(df)*100:.1f}%")

    # Attendance by category
    st.markdown("### Attendance by Participant Category")

    attendance_data = []
    for category in df['category'].unique():
        cat_df = df[df['category'] == category]

        day1_present = len(cat_df[cat_df['attendance_day1'] == 'Present'])
        day2_present = len(cat_df[cat_df['attendance_day2'] == 'Present'])

        attendance_data.append({
            'Category': category,
            'Day 1 Present': day1_present,
            'Day 1 Rate': f"{day1_present/len(cat_df)*100:.1f}%",
            'Day 2 Present': day2_present,
            'Day 2 Rate': f"{day2_present/len(cat_df)*100:.1f}%"
        })

    attendance_df = pd.DataFrame(attendance_data)
    st.dataframe(attendance_df)

    # Detailed attendance view
    st.markdown("### Detailed Attendance Report")
    attendance_cols = ['name', 'institution', 'designation', 'attendance_day1', 'attendance_day2', 'payment_status']
    st.dataframe(df[attendance_cols].sort_values(['attendance_day1', 'attendance_day2']))

def show_assessment_results():
    st.subheader("🧠 Assessment Results")

    df = generate_sample_data()

    # Quiz score distribution
    quiz_scores = df['quiz_score'].dropna()

    if len(quiz_scores) > 0:
        col1, col2, col3 = st.columns(3)

        with col1:
            st.metric("Average Score", f"{quiz_scores.mean():.1f}%", "Above 70% target")
        with col2:
            st.metric("Highest Score", f"{quiz_scores.max():.1f}%")
        with col3:
            st.metric("Completion Rate", f"{len(quiz_scores)/len(df)*100:.1f}%", "Quiz responses")

        # Score distribution chart
        st.markdown("### Quiz Score Distribution")

        fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))

        # Histogram
        ax1.hist(quiz_scores, bins=10, alpha=0.7, color='#0066CC', edgecolor='black')
        ax1.set_xlabel('Score (%)')
        ax1.set_ylabel('Number of Participants')
        ax1.set_title('Score Distribution')
        ax1.grid(True, alpha=0.3)

        # Box plot
        ax2.boxplot(quiz_scores, vert=False, patch_artist=True,
                   boxprops=dict(facecolor='#CC0066', color='black'),
                   medianprops=dict(color='white', linewidth=2))
        ax2.set_xlabel('Score (%)')
        ax2.set_title('Score Variability')
        ax2.grid(True, alpha=0.3)

        plt.tight_layout()
        st.pyplot(fig)

        # Scores by specialty
        st.markdown("### Performance by Specialty")

        specialty_scores = df.groupby('specialty')['quiz_score'].agg(['mean', 'count', 'std']).round(1)
        specialty_scores = specialty_scores[specialty_scores['count'] > 0]
        specialty_scores.columns = ['Average Score', 'Count', 'Std Dev']

        fig = px.bar(specialty_scores.reset_index(),
                    x='specialty', y='Average Score',
                    color='Count', title="Quiz Performance by Specialty")
        st.plotly_chart(fig, use_container_width=True)

    else:
        st.info("No quiz scores available yet. Quiz will be held during workshop.")

def show_feedback_ratings():
    st.subheader("⭐ Workshop Feedback & Ratings")

    df = generate_sample_data()

    if 'feedback_rating' in df.columns:
        # Overall rating
        avg_rating = df['feedback_rating'].mean()

        col1, col2, col3 = st.columns(3)

        with col1:
            st.metric("Average Rating", f"{avg_rating:.2f}/5", "Very Good")
        with col2:
            high_ratings = len(df[df['feedback_rating'] >= 4])
            st.metric("Satisfied Participants", f"{high_ratings}/{len(df)}", f"{high_ratings/len(df)*100:.1f}%")
        with col3:
            excellent_ratings = len(df[df['feedback_rating'] >= 5])
            st.metric("Excellent Ratings", f"{excellent_ratings}/{len(df)}", f"{excellent_ratings/len(df)*100:.1f}%")

        # Rating distribution
        st.markdown("### Rating Distribution")

        rating_counts = df['feedback_rating'].value_counts().sort_index()

        fig = px.bar(x=rating_counts.index, y=rating_counts.values,
                    title="Participant Feedback Ratings",
                    labels={'x': 'Rating (1-5)', 'y': 'Number of Responses'},
                    color_discrete_sequence=['#FF9900'])
        fig.update_xaxes(type='category')
        st.plotly_chart(fig, use_container_width=True)

        # Rating by knowledge level
        st.markdown("### Feedback by Prior HTA Knowledge")

        knowledge_ratings = df.groupby('hta_knowledge')['feedback_rating'].agg(['mean', 'count']).round(2)
        knowledge_ratings.columns = ['Average Rating', 'Count']

        fig = px.bar(knowledge_ratings.reset_index(),
                    x='hta_knowledge', y='Average Rating',
                    title="Feedback by Knowledge Level",
                    color='Count')
        fig.update_xaxes(tickangle=45)
        st.plotly_chart(fig, use_container_width=True)

    else:
        st.info("Feedback data will be collected after workshop completion.")

def show_reports_downloads():
    st.subheader("📋 Reports & Downloads")

    st.markdown("### Available Reports")
    st.info("Reports will be auto-generated after workshop completion with real data.")

    # Sample report buttons
    col1, col2, col3 = st.columns(3)

    with col1:
        if st.button("📊 Generate Registration Report", type="primary"):
            st.success("Registration report would be generated here")

    with col2:
        if st.button("📈 Create Attendance Report", type="primary"):
            st.success("Attendance report would be generated here")

    with col3:
        if st.button("⭐ Download Feedback Summary", type="primary"):
            st.success("Feedback summary would be downloaded here")

    st.markdown("### Data Export Options")
    st.markdown("Export participant data in various formats:")

    export_options = st.multiselect(
        "Select data to export:",
        ["Registration Data", "Payment Records", "Attendance Logs",
         "Quiz Scores", "Feedback Responses", "Demographic Summary"],
        ["Registration Data", "Demographic Summary"]
    )

    if st.button("Export Selected Data"):
        st.success(f"Would export: {', '.join(export_options)}")

    # Certificate generation section
    st.markdown("### Certificate Generation")

    with st.form("certificate_form"):
        st.markdown("Individual Certificate Generation:")
        participant_id = st.text_input("Enter Participant ID (e.g., P001):")
        certificate_type = st.selectbox("Certificate Type:", ["Completion", "Participation", "Excellence"])

        submitted = st.form_submit_button("Generate Certificate")
        if submitted:
            if participant_id:
                st.success(f"Certificate for {participant_id} would be generated here")
            else:
                st.error("Please enter a participant ID")

if __name__ == "__main__":
    main()
