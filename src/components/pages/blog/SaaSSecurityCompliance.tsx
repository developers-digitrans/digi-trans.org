import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { motion } from "framer-motion";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Calendar, User, Clock, Share2, ArrowRight, Shield, Lock, CheckCircle, AlertTriangle, Users, FileText } from "lucide-react";
import SEO from "../../SEO";

export default function SaaSSecurityCompliance() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="SaaS Security & Compliance: SOC 2, GDPR, and HIPAA Implementation Guide"
        description="Complete guide to implementing enterprise-grade security and compliance for SaaS platforms. SOC 2, GDPR, HIPAA best practices from 50+ successful implementations."
        canonicalUrl="/blog/saas-security-compliance-soc2-gdpr-hipaa"
        keywords={[
          "SaaS security",
          "SOC 2 compliance",
          "GDPR implementation",
          "HIPAA compliance SaaS",
          "enterprise security",
          "SaaS compliance framework",
        ]}
      />
      <Navbar />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="mb-6">
              <span className="inline-block mb-4 px-4 py-1 bg-green-900/40 text-green-300 text-sm rounded-full border border-green-500/30">
                Security & Compliance
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-400">
                SaaS Security & Compliance: Your Complete Implementation Guide
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Learn how to implement enterprise-grade security and achieve SOC 2, GDPR, and HIPAA compliance 
                for your SaaS platform. Based on 50+ successful compliance implementations including MedCare Connect 
                and FinanceFlow.
              </p>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>December 10, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Fatima Aarab, CEO</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
              </div>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>

            {/* Featured Image */}
            <div className="aspect-video rounded-xl overflow-hidden mb-8 border border-blue-800/30">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80"
                alt="SaaS Security and Compliance"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-green max-w-none"
          >
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Security and compliance aren't optional for enterprise SaaS—they're table stakes. After helping 
                companies like MedCare Connect achieve HIPAA compliance and FinanceFlow get SOC 2 Type II certification, 
                we've learned that the key to successful compliance is building security into your architecture from day one, 
                not bolting it on later.
              </p>
              
              <Card className="p-6 bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/20 mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  What You'll Learn
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Complete SOC 2 Type II implementation roadmap</li>
                  <li>• GDPR compliance for SaaS platforms operating in Europe</li>
                  <li>• HIPAA requirements for healthcare SaaS applications</li>
                  <li>• Security architecture patterns for enterprise SaaS</li>
                  <li>• Practical implementation guides with code examples</li>
                  <li>• Common compliance pitfalls and how to avoid them</li>
                </ul>
              </Card>
            </div>

            {/* Compliance Framework Overview */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-green-400" />
                Understanding SaaS Compliance Frameworks
              </h2>
              
              <p className="text-gray-300 mb-6">
                Different compliance frameworks serve different purposes. Here's how to choose the right 
                certifications for your SaaS business:
              </p>

              <div className="grid gap-6 mb-8">
                <Card className="p-6 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-blue-400" />
                    <h4 className="text-xl font-bold text-blue-400">SOC 2 Type II</h4>
                  </div>
                  <p className="text-gray-300 mb-4">
                    <strong>Best for:</strong> B2B SaaS companies serving enterprise customers<br/>
                    <strong>Timeline:</strong> 6-12 months for initial certification<br/>
                    <strong>Cost:</strong> $50K-$150K annually (audit + implementation)
                  </p>
                  <div className="bg-black/30 rounded p-3 mb-4">
                    <h5 className="font-bold text-white mb-2">Trust Service Criteria:</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Security: Protection against unauthorized access</li>
                      <li>• Availability: System availability for operation and use</li>
                      <li>• Processing Integrity: Complete, valid, accurate processing</li>
                      <li>• Confidentiality: Protection of confidential information</li>
                      <li>• Privacy: Collection, use, retention, and disposal of personal information</li>
                    </ul>
                  </div>
                  <div className="text-sm text-blue-300">
                    ✅ Required by most enterprise customers • ✅ Annual audit requirement
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-blue-800/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-purple-400" />
                    <h4 className="text-xl font-bold text-purple-400">GDPR Compliance</h4>
                  </div>
                  <p className="text-gray-300 mb-4">
                    <strong>Best for:</strong> Any SaaS with EU users or data processing<br/>
                    <strong>Timeline:</strong> 3-6 months for implementation<br/>
                    <strong>Penalties:</strong> Up to 4% of global annual revenue
                  </p>
                  <div className="bg-black/30 rounded p-3 mb-4">
                    <h5 className="font-bold text-white mb-2">Key Requirements:</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Lawful basis for data processing</li>
                      <li>• Data subject rights (access, portability, erasure)</li>
                      <li>• Privacy by design and by default</li>
                      <li>• Data breach notification (72 hours)</li>
                      <li>• Data Protection Impact Assessments (DPIA)</li>
                    </ul>
                  </div>
                  <div className="text-sm text-purple-300">
                    ✅ Mandatory for EU operations • ✅ Enhances global privacy posture
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-green-900/20 to-teal-900/20 border border-green-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-6 h-6 text-green-400" />
                    <h4 className="text-xl font-bold text-green-400">HIPAA Compliance</h4>
                  </div>
                  <p className="text-gray-300 mb-4">
                    <strong>Best for:</strong> Healthcare SaaS handling PHI (Protected Health Information)<br/>
                    <strong>Timeline:</strong> 4-8 months for full implementation<br/>
                    <strong>Penalties:</strong> $100-$50,000 per violation
                  </p>
                  <div className="bg-black/30 rounded p-3 mb-4">
                    <h5 className="font-bold text-white mb-2">Key Safeguards:</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Administrative: Policies, procedures, training</li>
                      <li>• Physical: Facility access controls, workstation security</li>
                      <li>• Technical: Access controls, audit logs, encryption</li>
                      <li>• Business Associate Agreements (BAAs)</li>
                      <li>• Risk assessments and incident response</li>
                    </ul>
                  </div>
                  <div className="text-sm text-green-300">
                    ✅ Required for healthcare PHI • ✅ Enables healthcare market entry
                  </div>
                </Card>
              </div>
            </section>

            {/* SOC 2 Implementation */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">SOC 2 Type II Implementation: A Step-by-Step Guide</h2>

              <p className="text-gray-300 mb-6">
                Based on our experience with FinanceFlow (€5M ARR) and other clients, here's our proven 
                SOC 2 implementation methodology:
              </p>

              <Card className="p-6 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20 mb-6">
                <h4 className="text-xl font-bold text-blue-400 mb-4">Phase 1: Assessment and Gap Analysis (Weeks 1-4)</h4>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-bold text-white mb-2">1. Current State Assessment</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Document existing security controls</li>
                      <li>• Review current policies and procedures</li>
                      <li>• Assess technical infrastructure</li>
                      <li>• Identify data flows and system boundaries</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h5 className="font-bold text-white mb-2">2. Gap Analysis</h5>
                    <div className="bg-black/30 rounded p-3 text-sm font-mono text-green-400 mb-2">
                      {`# SOC 2 Gap Analysis Template
## Security Controls Assessment
- [ ] Access Control Management
- [ ] Multi-Factor Authentication
- [ ] Network Security Controls
- [ ] Encryption at Rest and in Transit
- [ ] Logging and Monitoring
- [ ] Incident Response Procedures
- [ ] Vendor Management Program
- [ ] Change Management Process`}
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-blue-800/30 mb-6">
                <h4 className="text-xl font-bold text-purple-400 mb-4">Phase 2: Control Implementation (Weeks 5-20)</h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2">Technical Controls</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Implement MFA across all systems</li>
                      <li>• Deploy SIEM solution</li>
                      <li>• Configure backup and recovery</li>
                      <li>• Enable encryption everywhere</li>
                      <li>• Set up monitoring and alerting</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/30 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2">Administrative Controls</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Develop security policies</li>
                      <li>• Create incident response plan</li>
                      <li>• Implement change management</li>
                      <li>• Establish vendor management</li>
                      <li>• Conduct security training</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-black/30 rounded p-3">
                  <h5 className="font-bold text-white mb-2">Example: Access Control Implementation</h5>
                  <div className="text-sm font-mono text-green-400">
                    {`// Role-based access control implementation
const roles = {
  admin: ['read', 'write', 'delete', 'manage_users'],
  user: ['read', 'write'],
  viewer: ['read']
};

const checkPermission = (userRole, action, resource) => {
  const userPermissions = roles[userRole] || [];
  const hasPermission = userPermissions.includes(action);
  
  // Log access attempt for SOC 2 audit trail
  auditLogger.log({
    timestamp: new Date().toISOString(),
    userId: req.user.id,
    action,
    resource,
    result: hasPermission ? 'granted' : 'denied',
    userRole
  });
  
  return hasPermission;
};`}
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/20">
                <h4 className="text-xl font-bold text-green-400 mb-4">Phase 3: Audit and Certification (Weeks 21-26)</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-white mb-2">Pre-Audit Preparation</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Complete evidence collection (6-12 months of logs)</li>
                      <li>• Prepare system and organization controls (SOC) description</li>
                      <li>• Conduct internal readiness assessment</li>
                      <li>• Select qualified auditing firm</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-white mb-2">Audit Process</h5>
                    <div className="bg-black/30 rounded p-3 text-sm text-gray-300">
                      <strong>Week 1-2:</strong> Planning and risk assessment<br/>
                      <strong>Week 3-4:</strong> Control testing and evidence review<br/>
                      <strong>Week 5:</strong> Management letter and findings<br/>
                      <strong>Week 6:</strong> Final report and certification
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* GDPR Implementation */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">GDPR Implementation for SaaS Platforms</h2>

              <p className="text-gray-300 mb-6">
                GDPR compliance requires both technical and procedural changes. Here's how we implemented 
                GDPR for DataSync Pro and other EU-facing SaaS platforms:
              </p>

              <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-blue-800/30 mb-6">
                <h4 className="text-xl font-bold text-purple-400 mb-4">Data Subject Rights Implementation</h4>
                
                <div className="space-y-4">
                  <div className="bg-black/30 rounded p-3">
                    <h5 className="font-bold text-white mb-2">1. Right of Access (Article 15)</h5>
                    <div className="text-sm font-mono text-green-400 mb-2">
                      {`// API endpoint for data export
app.get('/api/gdpr/export/:userId', authenticateUser, async (req, res) => {
  const userId = req.params.userId;
  
  // Verify user can only access their own data
  if (req.user.id !== userId) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  
  const userData = await exportUserData(userId);
  
  // Log the request for compliance tracking
  await logGDPRRequest(userId, 'data_export', req.ip);
  
  res.json({
    personal_data: userData,
    export_date: new Date().toISOString(),
    retention_period: '7 years',
    data_sources: ['user_profile', 'activity_logs', 'preferences']
  });
});`}
                    </div>
                  </div>

                  <div className="bg-black/30 rounded p-3">
                    <h5 className="font-bold text-white mb-2">2. Right to Erasure (Article 17)</h5>
                    <div className="text-sm font-mono text-green-400 mb-2">
                      {`// Implement data deletion with proper safeguards
const deleteUserData = async (userId, reason) => {
  // Verify legal grounds for keeping some data
  const retentionChecks = await checkRetentionRequirements(userId);
  
  if (retentionChecks.hasLegalObligation) {
    await pseudonymizeUserData(userId);
    await logGDPRRequest(userId, 'pseudonymization', reason);
  } else {
    await hardDeleteUserData(userId);
    await logGDPRRequest(userId, 'hard_deletion', reason);
  }
  
  // Notify downstream systems
  await notifyDataDeletion(userId);
};`}
                    </div>
                  </div>

                  <div className="bg-black/30 rounded p-3">
                    <h5 className="font-bold text-white mb-2">3. Data Portability (Article 20)</h5>
                    <div className="text-sm font-mono text-green-400">
                      {`// Export data in machine-readable format
const exportPortableData = async (userId) => {
  const data = await getUserData(userId);
  
  return {
    format: 'JSON',
    version: '1.0',
    export_date: new Date().toISOString(),
    data: {
      profile: data.profile,
      preferences: data.preferences,
      content: data.userGeneratedContent
    }
  };
};`}
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 mb-6">
                <h4 className="text-xl font-bold text-blue-400 mb-4">Privacy by Design Implementation</h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold text-white mb-2">Data Minimization</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Collect only necessary data</li>
                      <li>• Implement retention policies</li>
                      <li>• Regular data audits</li>
                      <li>• Purpose limitation controls</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-white mb-2">Consent Management</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Granular consent options</li>
                      <li>• Easy withdrawal mechanism</li>
                      <li>• Consent logging system</li>
                      <li>• Cookie consent banner</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            {/* HIPAA Implementation */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">HIPAA Compliance for Healthcare SaaS</h2>

              <p className="text-gray-300 mb-6">
                MedCare Connect required HIPAA compliance from day one. Here's how we built a 
                healthcare SaaS platform that handles PHI securely:
              </p>

              <Card className="p-6 bg-gradient-to-br from-green-900/20 to-teal-900/20 border border-green-500/20 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <img src="/images/3.svg" alt="MedCare Logo" className="w-12 h-12" />
                  <div>
                    <h4 className="text-xl font-bold text-white">MedCare Connect Case Study</h4>
                    <p className="text-green-400">HIPAA-Compliant Healthcare Platform</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">
                  Built HIPAA-compliant healthcare management platform serving 50+ healthcare providers 
                  with zero security incidents to date.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-black/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">50+</div>
                    <div className="text-xs text-gray-300">Healthcare Providers</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">Zero</div>
                    <div className="text-xs text-gray-300">Security Incidents</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">12</div>
                    <div className="text-xs text-gray-300">Weeks to Launch</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/20 mb-6">
                <h4 className="text-xl font-bold text-green-400 mb-4">Technical Safeguards Implementation</h4>
                
                <div className="space-y-4">
                  <div className="bg-black/30 rounded p-3">
                    <h5 className="font-bold text-white mb-2">Access Control (§164.312(a))</h5>
                    <div className="text-sm font-mono text-green-400 mb-2">
                      {`// HIPAA-compliant access control
const checkPHIAccess = async (userId, patientId, action) => {
  // Check if user has legitimate relationship with patient
  const relationship = await getPatientRelationship(userId, patientId);
  
  if (!relationship) {
    await logHIPAAViolationAttempt(userId, patientId, action);
    throw new Error('No treatment relationship exists');
  }
  
  // Verify minimum necessary access
  const allowedFields = getMinimumNecessaryFields(relationship.role, action);
  
  // Log all PHI access for audit
  await logPHIAccess({
    userId,
    patientId,
    action,
    fields: allowedFields,
    timestamp: new Date().toISOString(),
    justification: relationship.purpose
  });
  
  return allowedFields;
};`}
                    </div>
                  </div>

                  <div className="bg-black/30 rounded p-3">
                    <h5 className="font-bold text-white mb-2">Audit Controls (§164.312(b))</h5>
                    <div className="text-sm font-mono text-green-400">
                      {`// Comprehensive HIPAA audit logging
const auditLogger = {
  logPHIAccess: async (event) => {
    await db.hipaa_audit_log.create({
      event_type: 'PHI_ACCESS',
      user_id: event.userId,
      patient_id: event.patientId,
      action: event.action,
      ip_address: event.ipAddress,
      user_agent: event.userAgent,
      success: event.success,
      failure_reason: event.failureReason,
      timestamp: new Date().toISOString()
    });
    
    // Real-time monitoring for suspicious activity
    await checkForSuspiciousActivity(event);
  }
};`}
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-teal-900/20 to-green-900/20 border border-teal-500/20">
                <h4 className="text-xl font-bold text-teal-400 mb-4">Encryption Implementation</h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded p-3">
                    <h5 className="font-bold text-white mb-2">Encryption at Rest</h5>
                    <div className="text-sm font-mono text-green-400 text-xs">
                      {`// AES-256 encryption for PHI
const crypto = require('crypto');

const encryptPHI = (data, key) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipher('aes-256-gcm', key);
  
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  const authTag = cipher.getAuthTag();
  
  return {
    iv: iv.toString('hex'),
    encrypted,
    authTag: authTag.toString('hex')
  };
};`}
                    </div>
                  </div>
                  
                  <div className="bg-black/30 rounded p-3">
                    <h5 className="font-bold text-white mb-2">Encryption in Transit</h5>
                    <div className="text-sm font-mono text-green-400 text-xs">
                      {`// TLS 1.3 configuration
const tlsOptions = {
  minVersion: 'TLSv1.3',
  ciphers: [
    'TLS_AES_256_GCM_SHA384',
    'TLS_CHACHA20_POLY1305_SHA256',
    'TLS_AES_128_GCM_SHA256'
  ].join(':'),
  honorCipherOrder: true,
  secureProtocol: 'TLSv1_3_method'
};

https.createServer(tlsOptions, app);`}
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Security Architecture */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Enterprise Security Architecture</h2>

              <p className="text-gray-300 mb-6">
                Regardless of which compliance framework you're targeting, these security architecture 
                patterns form the foundation of any enterprise-ready SaaS platform:
              </p>

              <Card className="p-6 bg-gradient-to-br from-gray-900/80 to-blue-900/20 border border-blue-500/20 mb-6">
                <h4 className="text-xl font-bold text-blue-400 mb-4">Zero Trust Architecture</h4>
                
                <div className="bg-black/30 rounded p-3 mb-4">
                  <div className="text-sm font-mono text-green-400">
                    {`// Zero Trust API Gateway Implementation
const verifyRequest = async (req, res, next) => {
  try {
    // 1. Verify JWT token
    const token = req.headers.authorization?.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // 2. Check token freshness (sliding window)
    if (Date.now() - decoded.iat > 3600000) { // 1 hour
      throw new Error('Token expired');
    }
    
    // 3. Verify device fingerprint
    const deviceId = req.headers['x-device-id'];
    if (!await verifyDevice(decoded.userId, deviceId)) {
      throw new Error('Unrecognized device');
    }
    
    // 4. Check IP allowlist (for enterprise clients)
    if (decoded.orgId && !await checkIPAllowlist(decoded.orgId, req.ip)) {
      throw new Error('IP not in allowlist');
    }
    
    // 5. Verify resource permissions
    const hasPermission = await checkResourcePermission(
      decoded.userId, 
      req.method, 
      req.path
    );
    
    if (!hasPermission) {
      throw new Error('Insufficient permissions');
    }
    
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed' });
  }
};`}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-900/20 rounded p-3">
                    <h5 className="font-bold text-white mb-2">Identity Verification</h5>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Multi-factor authentication</li>
                      <li>• Device fingerprinting</li>
                      <li>• Behavioral analytics</li>
                    </ul>
                  </div>
                  <div className="bg-blue-900/20 rounded p-3">
                    <h5 className="font-bold text-white mb-2">Access Control</h5>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Role-based permissions</li>
                      <li>• Resource-level authorization</li>
                      <li>• Time-based access</li>
                    </ul>
                  </div>
                  <div className="bg-blue-900/20 rounded p-3">
                    <h5 className="font-bold text-white mb-2">Continuous Monitoring</h5>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Real-time threat detection</li>
                      <li>• Anomaly monitoring</li>
                      <li>• Automated response</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-red-900/20 border border-blue-800/30">
                <h4 className="text-xl font-bold text-purple-400 mb-4">Incident Response Framework</h4>
                
                <div className="space-y-4">
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div className="bg-black/30 rounded p-3">
                      <div className="text-lg font-bold text-red-400 mb-1">Detect</div>
                      <div className="text-xs text-gray-300">SIEM alerts<br/>Anomaly detection</div>
                    </div>
                    <div className="bg-black/30 rounded p-3">
                      <div className="text-lg font-bold text-orange-400 mb-1">Respond</div>
                      <div className="text-xs text-gray-300">Incident triage<br/>Containment</div>
                    </div>
                    <div className="bg-black/30 rounded p-3">
                      <div className="text-lg font-bold text-yellow-400 mb-1">Recover</div>
                      <div className="text-xs text-gray-300">System restoration<br/>Service recovery</div>
                    </div>
                    <div className="bg-black/30 rounded p-3">
                      <div className="text-lg font-bold text-green-400 mb-1">Learn</div>
                      <div className="text-xs text-gray-300">Post-incident review<br/>Process improvement</div>
                    </div>
                  </div>

                  <div className="bg-black/30 rounded p-3">
                    <h5 className="font-bold text-white mb-2">Automated Incident Response</h5>
                    <div className="text-sm font-mono text-green-400 text-xs">
                      {`// Automated security incident response
const handleSecurityIncident = async (alert) => {
  const severity = assessThreatSeverity(alert);
  
  // Immediate automated response
  if (severity === 'CRITICAL') {
    await isolateAffectedSystems(alert.sourceIp);
    await notifySecurityTeam(alert, 'IMMEDIATE');
    await enableEnhancedLogging();
  }
  
  // Log for compliance audit trail
  await logSecurityIncident({
    id: generateIncidentId(),
    timestamp: new Date().toISOString(),
    severity,
    alert,
    automaticActions: ['system_isolation', 'team_notification'],
    status: 'INVESTIGATING'
  });
};`}
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Common Pitfalls */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                Common Compliance Pitfalls to Avoid
              </h2>
              
              <div className="space-y-4">
                <Card className="p-6 bg-gradient-to-br from-red-900/20 to-gray-900/80 border border-red-500/20">
                  <h4 className="text-lg font-bold text-red-400 mb-3">❌ Retrofitting Security</h4>
                  <p className="text-gray-300 mb-4">
                    Adding security and compliance as an afterthought is expensive and risky. Build security 
                    into your architecture from day one.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-red-400">Wrong Approach:</strong>
                      <ul className="text-gray-400 mt-1 space-y-1">
                        <li>• Build first, secure later</li>
                        <li>• Add encryption after launch</li>
                        <li>• Implement logging reactively</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-green-400">Right Approach:</strong>
                      <ul className="text-gray-400 mt-1 space-y-1">
                        <li>• Security by design</li>
                        <li>• Encrypt from day one</li>
                        <li>• Comprehensive logging from start</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-red-900/20 to-gray-900/80 border border-red-500/20">
                  <h4 className="text-lg font-bold text-red-400 mb-3">❌ Inadequate Documentation</h4>
                  <p className="text-gray-300 mb-4">
                    Compliance audits require extensive documentation. Poor documentation is the #1 cause 
                    of audit failures.
                  </p>
                  <div className="bg-black/30 rounded p-3 text-sm">
                    <strong className="text-white">Required Documentation:</strong>
                    <ul className="text-gray-300 mt-2 space-y-1">
                      <li>• Security policies and procedures</li>
                      <li>• System and organization controls (SOC) description</li>
                      <li>• Risk assessment and treatment plans</li>
                      <li>• Incident response procedures</li>
                      <li>• Employee training records</li>
                      <li>• Vendor management documentation</li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-red-900/20 to-gray-900/80 border border-red-500/20">
                  <h4 className="text-lg font-bold text-red-400 mb-3">❌ Insufficient Access Controls</h4>
                  <p className="text-gray-300 mb-4">
                    Overly permissive access controls are a common audit finding. Implement principle 
                    of least privilege from the start.
                  </p>
                  <div className="bg-black/30 rounded p-3 text-sm font-mono text-green-400">
                    {`// Example: Proper role-based access control
const permissions = {
  'patient-data': {
    'doctor': ['read', 'write', 'create'],
    'nurse': ['read', 'write'],
    'receptionist': ['read'],
    'billing': ['read:billing-info']
  }
};

const hasPermission = (userRole, resource, action) => {
  const resourcePerms = permissions[resource] || {};
  const rolePerms = resourcePerms[userRole] || [];
  return rolePerms.includes(action);
};`}
                  </div>
                </Card>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Your Path to Compliance Success</h2>
              
              <p className="text-lg text-gray-300 mb-6">
                Security and compliance aren't just checkboxes—they're competitive advantages that 
                enable you to serve enterprise customers and enter regulated markets. The strategies 
                outlined in this guide have helped our clients achieve certifications like MedCare 
                Connect's HIPAA compliance and FinanceFlow's SOC 2 Type II certification.
              </p>

              <Card className="p-6 bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/20">
                <h4 className="text-xl font-bold text-white mb-4">Compliance Success Framework:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-green-400 mb-2">Technical Excellence</h5>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>✅ Security by design architecture</li>
                      <li>✅ Comprehensive encryption strategy</li>
                      <li>✅ Zero trust network model</li>
                      <li>✅ Automated monitoring and response</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-blue-400 mb-2">Operational Excellence</h5>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>✅ Thorough documentation practices</li>
                      <li>✅ Regular security training programs</li>
                      <li>✅ Incident response procedures</li>
                      <li>✅ Continuous compliance monitoring</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            {/* CTA */}
            <div className="border-t border-gray-800 pt-8">
              <Card className="p-8 bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/20 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Achieve Enterprise-Grade Security?
                </h3>
                <p className="text-gray-300 mb-6">
                  Our team has successfully implemented SOC 2, GDPR, and HIPAA compliance for 50+ SaaS companies. 
                  Let's discuss your compliance requirements and create a roadmap for certification.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3"
                  onClick={() => window.open("/contact", "_self")}
                >
                  Get Compliance Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Card>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
}