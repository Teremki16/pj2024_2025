using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Controller : MonoBehaviour
{
    private float angleY, dirZ, jumpFore = 6f, turnSpeed = 80f;
    private bool isGrounded = true;
    private Rigidbody rb;
    private Animator animator;
    private Vector3 jumpDir;
    bool isEquip = false;

    [SerializeField] GameObject sword;
    [SerializeField] GameObject hips;
    [SerializeField] GameObject rightHand;

    Vector3 LSP;
    Quaternion LSR;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
        animator = GetComponent<Animator>();
    }


    void Update()
    {
        angleY = Input.GetAxis("Mouse X") * turnSpeed * Time.fixedDeltaTime;
        dirZ = Input.GetAxis("Vertical");
        transform.Rotate(new Vector3(0f, angleY, 0f));
        if (isGrounded)
        {
            if (Input.GetKeyDown(KeyCode.Space))
            {
                Jump();
            }
            else
            {
                animator.SetTrigger("IsLanded");
            }
            Move(dirZ, "IsWalkForward", "IsWalkBack");
            Dodge();
            Sprint();
        }
        else
        {
            MoveInAir();
        }
        if (Input.GetKeyDown(KeyCode.R) && !isEquip)
        {
            animator.Play("Sword_Equip");
            isEquip = true;
        }
        else if (Input.GetKeyDown(KeyCode.R) && isEquip)
        {
            animator.Play("Sword_Holster");
            isEquip = false;
        }
        if (Input.GetMouseButtonDown(0) && isEquip)
        {
            switch(Random.Range(0, 3))
            {
                case 0:
                    animator.Play("GG1");
                    break;
                case 1:
                    animator.Play("GG2");
                    break;
                case 2:
                    animator.Play("GG3");
                    break;
            }
        }
    }

    private void Move(float dir, string parametrName, string altParamtrName)
    {
        if (dir > 0f)
        {
            animator.SetBool(parametrName, true);
        }
        else if (dir < 0f)
        {
            animator.SetBool(altParamtrName, true);
        }
        else
        {
            animator.SetBool(parametrName, false);
            animator.SetBool(altParamtrName, false);
        }
    }

    private void Dodge()
    {
        if (Input.GetKeyDown(KeyCode.D))
        {
            animator.Play("Sword_Dodge_Right");
        }
        else if (Input.GetKeyDown(KeyCode.A))
        {
            animator.Play("Sword_Dodgle_Left");
        }
    }

    private void Sprint()
    {
        animator.SetBool("IsRun", Input.GetKey(KeyCode.LeftShift));
    }

    private void Jump()
    {
        animator.Play("Sword_Jump_Platformer_Start");
        animator.applyRootMotion = false;
        jumpDir = new Vector3(0f, jumpFore, (dirZ * jumpFore) / 2f);
        jumpDir = transform.TransformDirection(jumpDir);
        rb.AddForce(jumpDir, ForceMode.Impulse);
        isGrounded = false;

    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        animator.applyRootMotion = true;
        isGrounded = true;
    }

    private void MoveInAir()
    {
        if (new Vector2(rb.velocity.x, rb.velocity.z).magnitude < 1.1f)
        {
            jumpDir = new Vector3(0f, rb.velocity.y, dirZ);
            jumpDir = transform.TransformDirection(jumpDir);
            rb.velocity = jumpDir;
        }
    }

    public void EquipSword()
    {
        LSP = sword.transform.localPosition;
        LSR = sword.transform.localRotation;
        sword.transform.SetParent(rightHand.transform);
    }

    public void UnEquipSword()
    {
        sword.transform.SetParent(hips.transform);
        sword.transform.localPosition = LSP;
        sword.transform.localRotation = LSR;
    }
}
