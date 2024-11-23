using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyController : MonoBehaviour
{
    public int hp = 3;
    private float prevHitTime, ignoreDamageWindow;
    private Animator animator;
    void Start()
    {
        animator = GetComponent<Animator>();
        prevHitTime = 0f;
        ignoreDamageWindow = 1.5f; 
    }

    
    void Update()
    {
        
    }

    private void OnTriggerEnter(Collider other)
    {
        if(other.gameObject.tag == "Weapon" && Time.time > prevHitTime + ignoreDamageWindow)
        {
            hp--;
            prevHitTime = Time.time;
            if(hp > 1)
            {
                animator.Play("KnockdownRight");
            }else if (hp == 1)
            {
                animator.Play("Sword_Defeat_1_Start");
            }
            else
            {
                animator.SetTrigger("isDead");
            }
        }
    }
}
